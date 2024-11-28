import Link from 'next/link'
import { LatestAssessments } from '~/app/_components/latest-assessments'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet'
import { NewAssessmentForm } from './_components/new-assessment-form'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-4 flex w-full max-w-3xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Latest Assessments</h1>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                New Assessment
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>

              <NewAssessmentForm />
            </SheetContent>
          </Sheet>
        </div>

        <LatestAssessments />
      </div>
    </div>
  )
}
