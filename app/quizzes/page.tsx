"use client";

import { useState } from "react";
import { QUIZZES, getCourse } from "@/lib/data";

export default function QuizzesPage() {
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const activeQuiz = QUIZZES.find((q) => q.id === activeQuizId);

  if (activeQuiz) {
    return <QuizRunner quizId={activeQuiz.id} onExit={() => setActiveQuizId(null)} />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-2">Quizzes</h1>
        <p className="text-[var(--color-muted)]">Test what you've learned and reinforce key concepts.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {QUIZZES.map((q) => {
          const course = getCourse(q.courseId);
          return (
            <div key={q.id} className="border border-[var(--color-border)] rounded-2xl p-6 bg-white">
              <h3 className="font-display font-semibold text-lg mb-1">{q.title}</h3>
              {course && <p className="text-xs text-[var(--color-muted)] mb-3">From: {course.title}</p>}
              <div className="flex items-center gap-4 text-sm text-[var(--color-muted)] mb-5">
                <span>{q.questions.length} questions</span>
                <span>⏱ {q.timeLimit} min</span>
              </div>
              <button
                onClick={() => setActiveQuizId(q.id)}
                className="px-5 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Start Quiz
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuizRunner({ quizId, onExit }: { quizId: string; onExit: () => void }) {
  const quiz = QUIZZES.find((q) => q.id === quizId)!;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[step];

  function submitAnswer() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (step + 1 < quiz.questions.length) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    const score = answers.filter((a, i) => a === quiz.questions[i].correctIndex).length;
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold mb-3">Quiz Complete!</h1>
        <p className="text-[var(--color-muted)] mb-6">
          You scored {score} out of {quiz.questions.length}
        </p>
        <button
          onClick={onExit}
          className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold"
        >
          Back to Quizzes
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-[var(--color-muted)]">
          Question {step + 1} of {quiz.questions.length}
        </span>
        <button onClick={onExit} className="text-sm text-[var(--color-secondary)] font-medium">
          Exit
        </button>
      </div>
      <h2 className="font-display text-xl font-semibold mb-6">{question.question}</h2>
      <div className="space-y-3 mb-8">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
              selected === i
                ? "border-[var(--color-primary)] bg-[var(--color-muted-bg)]"
                : "border-[var(--color-border)] hover:bg-[var(--color-muted-bg)]"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={submitAnswer}
        disabled={selected === null}
        className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold disabled:opacity-40"
      >
        {step + 1 === quiz.questions.length ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
}
