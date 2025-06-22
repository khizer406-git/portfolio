import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Crysis - Healthcare Coordination Platform</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">ReactJS</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">SSE</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Built a full-stack ReactJS and Node.js (Express) system for real-time doctor-patient interactions.
                </li>
                <li>Integrated Server-Sent Events (SSE) for instant notifications and automated scheduling.</li>
                <li>Designed an optimized MongoDB schema for efficient query execution.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                The College Corner - Multi-Vendor E-Commerce Platform
              </CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">ReactJS</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Worked on a scalable marketplace where sellers manage products and buyers shop efficiently.</li>
                <li>Contributed to designing a secure admin panel for order management and vendor approvals.</li>
                <li>Assisted in integrating payment gateways and optimizing database queries for high performance.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Grantaly – Academic Collaboration Platform</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">ReactJS</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Built a platform enabling students to collaborate with professors, schedule meetings, and track
                  project milestones.
                </li>
                <li>
                  Implemented automated email notifications and real-time progress tracking for academic projects.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                FYP: Federated Learning with Smart Contracts in Healthcare
              </CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">ReactJS</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Solidity</Badge>
                <Badge variant="secondary">OpenZeppelin</Badge>
                <Badge variant="secondary">Hardhat</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Collaborated on a ReactJS frontend and Node.js backend to deliver seamless user interactions.</li>
                <li>
                  Assisted in implementing Smart Contracts (Solidity) with OpenZeppelin for secure decentralized
                  transactions.
                </li>
                <li>
                  Participated in testing smart contracts using Hardhat, Mocha, and Chai, and in deploying them on the
                  Aurora testnet.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Restaurant Management System</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">ReactJS</Badge>
                <Badge variant="secondary">Material UI</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MySQL</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Collaborated on a ReactJS frontend using Material UI and a Node.js backend for efficient order
                  processing.
                </li>
                <li>
                  Contributed to designing a 3NF-compliant MySQL database to ensure data integrity and performance.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
