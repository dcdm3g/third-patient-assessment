import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Progress } from '~/components/ui/progress'
import { trpc } from '~/trpc/react'

type Option = {
  text: string
  level: number
}

type Question = {
  question: string
  options: Option[]
}

const questions: Question[] = [
  {
    question: 'How would you rate your overall physical health?',
    options: [
      { text: 'Excellent', level: 4 },
      { text: 'Good', level: 3 },
      { text: 'Fair', level: 2 },
      { text: 'Poor', level: 1 },
    ],
  },
  {
    question: 'How often do you experience feelings of anxiety?',
    options: [
      { text: 'Never', level: 4 },
      { text: 'Rarely', level: 3 },
      { text: 'Sometimes', level: 2 },
      { text: 'Often', level: 1 },
    ],
  },
  {
    question: 'How would you describe the quality of your sleep?',
    options: [
      { text: 'Excellent', level: 4 },
      { text: 'Good', level: 3 },
      { text: 'Fair', level: 2 },
      { text: 'Poor', level: 1 },
    ],
  },
  {
    question: 'How satisfied are you with your current emotional well-being?',
    options: [
      { text: 'Very satisfied', level: 4 },
      { text: 'Satisfied', level: 3 },
      { text: 'Neutral', level: 2 },
      { text: 'Dissatisfied', level: 1 },
    ],
  },
]

export function Questions() {
  const [question, setQuestion] = useState<number | null>(0)
  const [score, setScore] = useState(0)

  function handleChose(level: number) {
    setQuestion((q) => {
      const exists = questions[q! + 1]
      return exists ? q! + 1 : null
    })

    setScore((s) => s + level)
  }

  const { question: text, options } = (question &&
    questions[question]) as Question
  const percentage = score * 5

  return (
    <div className="mx-4 flex w-full max-w-3xl flex-col gap-6">
      <Progress value={percentage} className="w-full" />

      <div className="flex flex-col gap-2.5">
        <h2 className="font-bold text-3xl">{text}</h2>

        <div className="flex gap-1.5">
          {options.map((o) => (
            <Button key={o.text} onClick={() => handleChose(o.level)}>
              {o.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
