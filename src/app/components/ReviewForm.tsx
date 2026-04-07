import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xkopykjw";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("review", review);

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setReview("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h3 className="text-3xl mb-6 text-slate-900 dark:text-slate-50" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Write a review
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Your Name:</label>
          <input
            className="w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Email:</label>
          <input
            type="email"
            className="w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Review:</label>
          <textarea
            className="w-full rounded-md border px-3 py-2 min-h-[120px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-50"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
          {status === "success" && <span className="text-sm text-green-600 dark:text-green-400">Thanks — your review was submitted.</span>}
          {status === "error" && <span className="text-sm text-red-600 dark:text-red-400">There was an error submitting. Try again later.</span>}
        </div>
      </form>
    </section>
  );
}
