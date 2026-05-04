import { useState, type ReactNode } from "react";
import { z } from "zod";
import { Smile, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "נא להזין שם").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "מספר טלפון לא תקין")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "מספר טלפון לא תקין"),
  email: z.string().trim().email("אימייל לא תקין").max(255),
  subject: z.string().min(1, "נא לבחור נושא"),
});

const subjects = [
  "אחסון אתרים",
  "שרתים וירטואליים",
  "דומיינים",
  "גיבוי בענן",
  "פיתוח תכונה",
  "שירותי מומחה",
  "אחר",
];

type Props = { children: ReactNode };

export function ContactDialog({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const { data: res, error } = await supabase.functions.invoke(
        "send-contact-email",
        { body: result.data },
      );
      if (error || (res && (res as { success?: boolean }).success === false)) {
        throw new Error(error?.message || "שליחה נכשלה");
      }
      setOpen(false);
      setSubject("");
      form.reset();
      setSuccessOpen(true);
    } catch (err) {
      console.error(err);
      toast.error("אירעה שגיאה בשליחה. נסה שוב מאוחר יותר.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        dir="rtl"
        className="max-w-lg overflow-hidden border-header-brand/20 p-0 sm:rounded-2xl"
      >
        <div className="bg-card px-8 pb-6 pt-8 text-right">
          <DialogHeader className="items-end text-right">
            <DialogTitle className="w-full text-right text-3xl font-bold text-foreground">
              הזמן שלך יקר,
            </DialogTitle>
            <DialogDescription className="mt-2 w-full text-right text-base text-muted-foreground">
              השאר פרטים ונחזור אליך
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="h-1 w-full bg-header-brand" />

        <form onSubmit={handleSubmit} className="space-y-4 px-8 pb-8 pt-6">
          <Field label="שם:" name="name" error={errors.name} />
          <Field label="טלפון:" name="phone" type="tel" error={errors.phone} />
          <Field label="אימייל:" name="email" type="email" error={errors.email} />

          <div className="space-y-1.5">
            <label className="block text-right text-sm text-muted-foreground">
              נושא הפניה:
            </label>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger className="h-11 flex-row-reverse justify-between border-header-brand/25 bg-background text-right focus:ring-header-brand/30 [&>span]:text-right">
                <SelectValue placeholder="בחר/י נושא" />
              </SelectTrigger>
              <SelectContent dir="rtl">
                {subjects.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.subject && (
              <p className="text-right text-sm text-destructive">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-1 pt-2 text-right text-sm text-muted-foreground">
            <p>
              <span className="text-header-brand">*</span> בשליחת הטופס אני מסכים/ה למדיניות הפרטיות.
            </p>
            <p>
              <span className="text-header-brand">*</span> כל השדות חובה
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-header-brand px-6 py-3.5 text-base font-medium text-background shadow-md shadow-header-brand/30 transition-all hover:-translate-y-0.5 hover:bg-header-brand/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            <span>{submitting ? "שולח..." : "שלח/י ונדבר בהקדם"}</span>
            {submitting ? (
              <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2} />
            ) : (
              <Smile className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>

    <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
      <DialogContent
        dir="rtl"
        className="max-w-md overflow-hidden border-header-brand/20 p-0 sm:rounded-2xl"
      >
        <div className="flex flex-col items-center gap-5 px-8 pb-8 pt-10 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-header-brand/10">
            <CheckCircle2 className="h-12 w-12 text-header-brand" strokeWidth={2} />
          </div>
          <DialogHeader className="items-center text-center">
            <DialogTitle className="text-2xl font-bold text-foreground">
              ההודעה נשלחה בהצלחה!
            </DialogTitle>
            <DialogDescription className="mt-2 text-base text-muted-foreground">
              תודה שפנית אלינו, נחזור אליך בהקדם האפשרי.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setSuccessOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-header-brand px-8 py-3 text-base font-medium text-background shadow-md shadow-header-brand/30 transition-all hover:-translate-y-0.5 hover:bg-header-brand/90"
          >
            סגור
          </button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-right text-sm text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="h-11 w-full rounded-md border border-header-brand/25 bg-background px-3 text-right text-foreground outline-none transition-colors focus:border-header-brand focus:ring-2 focus:ring-header-brand/20"
      />
      {error && <p className="text-right text-sm text-destructive">{error}</p>}
    </div>
  );
}
