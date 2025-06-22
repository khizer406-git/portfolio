import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["JavaScript", "TypeScript", "C", "C++"],
    },
    {
      title: "Libraries & Frameworks",
      skills: ["ReactJS", "Next.js", "Node.js", "Redux", "MUI", "Tailwind CSS"],
    },
    {
      title: "Databases",
      skills: ["SQL (PostgreSQL, MySQL)", "MongoDB"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Postman", "REST API", "CI/CD (GitHub Actions)"],
    },
  ]

  return (
    <section id="skills" className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
