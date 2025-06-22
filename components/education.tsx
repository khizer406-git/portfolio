import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  return (
    <section id="education" className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>

        <div className="mt-8 space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl text-primary">Master's in Computer Science</CardTitle>
                  <CardDescription className="text-lg">FAST-NUCES</CardDescription>
                </div>
                <div className="flex flex-col gap-2 items-start md:items-end">
                  <Badge variant="outline" className="self-start md:self-center">
                    Aug. 2024 - June 2026
                  </Badge>
                  <span className="text-sm text-muted-foreground">GPA: 3.67</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl text-primary">Bachelor's in Software Engineering</CardTitle>
                  <CardDescription className="text-lg">FAST-NUCES</CardDescription>
                </div>
                <div className="flex flex-col gap-2 items-start md:items-end">
                  <Badge variant="outline" className="self-start md:self-center">
                    Aug. 2019 - June 2023
                  </Badge>
                  <span className="text-sm text-muted-foreground">GPA: 2.92</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
