import Link from "next/link";
import React from "react";
import { LuListStart } from "react-icons/lu";

export default function DigitalSkills() {
  return (
    <div class="flex flex-col items-center container px-4 mx-auto">
      <h1 class="text-black text-center text-4xl font-bold tracking-tight md:text-5xl mt-10 mb-12">
        Digital Skills Training
      </h1>
      <div class=" max-w-2xl ml-4 flex-1 [&amp;&gt;p]:mb-12 [&amp;&gt;h2]:text-xl [&amp;&gt;h2]:font-bold">
        <p>
          The Digital Skills Training Program is designed to help you develop a
          strong foundation in backend development and acquire the skills needed
          to succeed in the tech industry. The program is structured to provide
          you with a comprehensive understanding of backend technologies,
          frameworks, and best practices, as well as hands-on experience
          building real-world projects.
        </p>
        <h2 className="font-mono font-bold my-6 ">Program Structure:</h2>
        <p>
          The program is divided into three months, each focusing on a different
          aspect of digital skills training. The curriculum is designed to
          become progressively more challenging, allowing you to build on your
          knowledge and skills as you progress through the program.
        </p>
        <hr className="my-10" />
        <ul className="px-6 py-2 list-disc">
          <li>Month 1: Foundational Skills (Weeks 1-4)</li>
          <li>Month 2: Specialization Tracks (Weeks 5-8)</li>
          <li>Month 3: Project & Portfolio Development (Weeks 9-12)</li>
        </ul>
        <hr className="my-10" />

        <h2 className="font-mono font-bold my-6 ">Weekly Breakdown:</h2>
        <ul className="px-6 py-2 list-disc">
          <li>
            {" "}
            <span className="font-bold">Workshops:</span> Interactive sessions
            led by the mentor covering key topics relevant to the program theme
            for that month. Workshops will be a mix of theory and hands-on
            exercises.
          </li>
          <li>
            <span className="font-bold">Group Discussions:</span> Opportunities
            to connect with fellow program participants, share experiences, and
            ask questions in a supportive environment.
          </li>
          <li>
            <span className="font-bold">Guest Speaker Sessions:</span> Learn
            from established freelancers and industry experts who will share
            their insights and practical advice.
          </li>
          <li>
            <span className="font-bold">Action Steps:</span> Weekly takeaways to
            ensure you're implementing the learnings and making progress towards
            your goals.
          </li>
          <li>
            <span className="font-bold">One on One Coaching:</span> Regular
            individual coaching sessions with the mentor to address your
            specific needs and challenges, and develop a personalized action
            plan.
          </li>
        </ul>

        <ul className="px-6 py-2 list-disc">
          <li>
            {" "}
            <span className="font-bold">Mentorship Program Overview:</span> This
            document provides an overview of the{" "}
            <Link href="/mentorships" className="text-green-700">
              mentorship program
            </Link>{" "}
            structure, curriculum, and additional resources to help you succeed
            as a digital Skills.
          </li>
          <li>
            <span className="font-bold">Weekly Breakdown:</span> A detailed
            breakdown of the weekly activities and learning objectives for each
            month of the program.
          </li>
          <li>
            <span className="font-bold">Additional Resources:</span> Links to
            external resources, tools, and articles to supplement your learning
            and deepen your understanding of digital skills.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 1: Foundational Digital Skills
        </h2>
        <p>
          The first month of the program focuses on building a strong foundation
          in digital skills, including microsoft office, google suite, social
          media marketing, and{" "}
          <Link href="/frontend-development" className="text-green-700">
            basic programming concepts
          </Link>{" "}
          . The goal is to equip you with the essential knowledge and skills
          needed to succeed in the tech industry.
        </p>
        <h2 className="font-mono font-bold my-6 ">
          {" "}
          Week 1-2: Microsoft Office and Google Suite
        </h2>
        <ul className="py-6 list-disc">
          <li>
            Microsoft Word: Formatting, editing, and creating professional
            documents and reports in Word.
          </li>
          <li>
            Microsoft Excel: Basic formulas, functions, and data analysis in
            Excel.
          </li>
          <li>
            Microsoft PowerPoint: Designing engaging presentations and
            slideshows in PowerPoint.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 3-4: Google Suite and Social Media Marketing
        </h2>
        <ul className="py-6 list-disc">
          <li>
            Google Docs, Sheets, and Slides: Collaborating and sharing
            documents, spreadsheets, and presentations using Google Suite.
          </li>
          <li>
            Google Drive: Organizing and managing files and folders in Google
            Drive.
          </li>
          <li>
            Google Calendar: Scheduling and managing events and appointments in
            Google Calendar.
          </li>
          <li>Gmail: Managing emails, contacts, and tasks in Gmail.</li>
          <li>
            Social Media Marketing: Understanding social media platforms,
            content creation, and engagement strategies.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 2: Specialization Tracks (Weeks 5-8)
        </h2>
        <p>
          Choose one specialization track to delve deeper into a specific
          skillset:
        </p>
        <h2 className="font-mono font-bold my-6 ">Track A: Data Analysis</h2>
        <ul className="py-6 list-disc">
          <li>
            Data Analysis Fundamentals: Introduction to data analysis concepts
          </li>
          <li>
            Data Visualization: Creating visualizations and dashboards to convey
            insights from data sets.
          </li>
          <li>
            Statistical Analysis: Applying statistical methods to analyze and
            interpret data.
          </li>
          <li>
            Machine Learning: Introduction to machine learning algorithms and
            models.
          </li>
          <li>
            Python for Data Analysis: Using Python libraries like Pandas and
            NumPy for data manipulation and analysis.
          </li>
          <li>SQL for Data Analysis: Querying and analyzing data using SQL.</li>
          <li>
            Data Analysis Tools: Working with tools like Excel, Tableau, and
            Power BI for data analysis.
          </li>
          <li>
            Data Analysis Projects: Hands-on projects to apply data analysis
            skills to real-world data sets.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">Track B: Graphic Design</h2>

        <ul className="py-6 list-disc">
          <li>
            Graphic Design Fundamentals: Introduction to design principles and
            concepts.
          </li>
          <li>
            Adobe Photoshop: Image editing, retouching, and manipulation in
            Photoshop.
          </li>
          <li>
            Adobe Illustrator: Creating vector graphics and illustrations in
            Illustrator.
          </li>
          <li>
            Adobe InDesign: Designing layouts and publications in InDesign.
          </li>
          <li>
            UI/UX Design: User interface and user experience design principles.
          </li>
          <li>
            Branding and Identity: Creating brand assets and visual identities.
          </li>
          <li>
            Graphic Design Tools: Working with tools like Canva, Sketch, and
            Figma.
          </li>
          <li>
            Graphic Design Projects: Hands-on projects to apply graphic design
            skills.
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Track C: Coding Fundamentals
        </h2>
        <ul className="py-6 list-disc">
          <li>
            Programming Fundamentals: Introduction to programming concepts
          </li>
          <li>
            HTML and CSS: Building and styling web pages with HTML and CSS
          </li>
          <li>
            JavaScript: Adding interactivity and functionality with JavaScript
          </li>
          <li>Version Control: Using Git and GitHub for version control</li>
          <li>
            Web Development Tools: Working with tools like VS Code and Chrome
            DevTools
          </li>
          <li>
            Responsive Design: Creating responsive and mobile-friendly websites
          </li>
          <li>
            Web Development Projects: Hands-on projects to apply web development
            skills
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Month 3: Project & Portfolio Development (Weeks 9-12)
        </h2>
        <h2 className="font-mono font-bold my-6 ">
          Week 9: Project Selection & Planning:
        </h2>
        <ul className="py-6 list-disc">
          <li>Identify a project idea based on your specialization track</li>
          <li>Define project scope, requirements, and timeline</li>
          <li>Create a project plan and outline key milestones</li>
          <li>Set up project management tools and version control systems</li>
          <li>
            Develop a project proposal and present it to the mentor for feedback
          </li>
        </ul>

        <h2 className="font-mono font-bold my-6 ">
          Week 11-12: Final Project and Deployment
        </h2>
        <ul className="py-6 list-disc">
          <li>Design and implement a full-stack application</li>
          <li>Server management and deployment </li>
          <li>Continuous Integration/Continuous Deployment (CI/CD) </li>
          <li>Monitoring and logging</li>
        </ul>

        <h2 className="font-mono font-bold my-6 "> Additional Resources:</h2>
        <p>
          This program is designed to take a mentee from basic programming
          knowledge to a job-ready backend developer. The curriculum can be
          adjusted based on the mentee's prior experience and learning pace.
          Would you like me to elaborate on any specific part of this mentorship
          program?
        </p>

        <p className="mb-14 font-mono">
          <span className="font-bold">Last updated:</span> 21 July 2024.
        </p>
      </div>
    </div>
  );
}
