import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>

        <div className="mt-8">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl text-primary">Software Engineer</CardTitle>
                  <CardDescription className="text-lg">V2F Solutions</CardDescription>
                </div>
                <Badge variant="outline" className="self-start md:self-center">
                  Oct. 2023 - Present
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Developed and maintained intuitive user interfaces using Next.js and React.js, enhancing user
                  experience.
                </li>
                <li>
                  Implemented clean, efficient, and type-safe coding practices, reducing bugs and improving
                  maintainability.
                </li>
                <li>Integrated RESTful APIs and third-party applications, expanding application functionality.</li>
                <li>Resolved complex technical issues and systematically refactored code to optimize performance.</li>
                <li>
                  Implemented JWT NextAuth authentication, ensuring robust security and access control across
                  applications.
                </li>
                <li>Mentored junior developers and trainees, conducting code reviews, and best practices guidance.</li>
                <li>Collaborated with cross-functional teams to design and deliver scalable applications.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
