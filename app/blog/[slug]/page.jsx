import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

function getPost(slug) {
  const posts = [
    {
      slug: "how-do-you-fight-the-urge-to-procrastinate",
      title: "How do you fight the urge to procrastinate?",
      content: `Procrastination is a common challenge that many people face, affecting both personal and professional lives. It often leads to stress, missed deadlines, and feelings of guilt. The good news is that overcoming procrastination is possible with the right strategies and mindset. In this article, we will explore practical tips and strategies on how to fight the urge to procrastinate, break free from its grip, and boost productivity.
                

        ## Understanding Procrastination

        Before diving into strategies for overcoming procrastination, it’s essential to understand why it happens in the first place. Procrastination is not merely about being lazy; it’s a complex psychological behavior driven by various factors such as:
        
        - Fear of failure: People often avoid starting tasks because they fear they won’t perform well.
        - Perfectionism: The desire to do everything perfectly can paralyze individuals and prevent them from taking action.
        - Overwhelm: Large tasks or long-term goals can feel daunting, leading to avoidance.
        - Lack of motivation: Without clear incentives or rewards, people might struggle to find the energy to start.
        - Poor time management: Difficulty organizing tasks and time can result in putting things off.

        Recognizing these underlying causes is the first step in addressing procrastination effectively.
        

        ## 1. Break Tasks Into Smaller, Manageable Steps

        One of the most effective ways to combat procrastination is by breaking tasks into smaller, more manageable pieces. When a task feels overwhelming or too complex, it can trigger the urge to delay it. However, breaking it down makes it feel more achievable and less intimidating.

        For example, if you're writing a research paper, instead of thinking about the entire project, focus on smaller tasks like conducting research, drafting an outline, and writing one section at a time. The smaller the task, the easier it is to get started, and the less likely you are to procrastinate.

        ## Tip: Use the "Two-Minute Rule"

        The "Two-Minute Rule" involves committing to work on a task for just two minutes. If you still feel like stopping after that time, you’re free to do so. Most of the time, starting is the hardest part, and once you begin, you’re likely to keep going.


        ## 2. Set Clear, Specific Goals

        Setting clear, specific goals helps eliminate ambiguity and makes it easier to stay focused. Vague goals such as “get started on the project” often lead to procrastination because they don’t provide a clear action plan.

        Instead, set SMART goals—goals that are Specific, Measurable, Achievable, Relevant, and Time-bound. For instance, rather than saying “work on the presentation,” set a goal like “finish the introduction of the presentation by 3:00 PM.” This goal is clear and offers a concrete target to work toward.


        ## Tip: Use the Pomodoro Technique

        The Pomodoro Technique is a time management method that involves working for 25 minutes, followed by a 5-minute break. After completing four "Pomodoros," take a longer break. This technique helps maintain focus and provides regular breaks, reducing the likelihood of burnout.


        ## 3. Identify and Address Your Procrastination Triggers

        To effectively fight procrastination, it's crucial to identify what triggers it. Are you procrastinating because you're bored? Is the task too difficult or uninteresting? Are you distracted by social media or other distractions? Once you identify your triggers, you can take steps to address them.

        For example:

        - Boredom: If you're putting off a task because it's boring, try to make it more engaging by connecting it to something you enjoy or by rewarding yourself for completing parts of it.
        - Difficulty: If the task feels too hard, break it into smaller, simpler tasks, or ask for help if needed.
        - Distractions: If distractions like social media or your phone are tempting you, consider using apps like "Forest" or "Focus@Will" to help you stay focused.


        ## Tip: Use a Procrastination Journal

        A procrastination journal is a tool where you record the reasons you procrastinate and the thoughts or feelings that arise when you delay tasks. By tracking these patterns, you can uncover deeper issues (e.g., fear of failure or perfectionism) and address them more effectively.


        ## 4. Change Your Environment

        
        Your physical environment plays a significant role in your ability to stay focused and productive. If you’re working in a cluttered, noisy, or distracting environment, you may feel more inclined to procrastinate. Creating a space that promotes focus and productivity can reduce distractions and help you get into a flow state.


        ## Tip: Organize Your Workspace

        
        Clear your workspace of distractions and keep it organized. A tidy and dedicated workspace signals to your brain that it’s time to work. Try to make your workspace comfortable and inspiring, whether through natural light, plants, or motivational quotes.

        Additionally, consider changing locations if necessary. For example, if you usually work at home and find yourself distracted, try working in a library, café, or coworking space to change the atmosphere.


        ## 5. Use Positive Self-Talk

        
        Negative self-talk and self-criticism are common triggers for procrastination. When you tell yourself “I’m too lazy,” or “I’ll never finish this on time,” it creates a mental barrier that makes starting difficult. Instead, focus on positive self-talk that encourages action.

        For instance, instead of saying, “I can’t do this,” try saying, “This may be challenging, but I’ll take it step by step.” Positive affirmations can shift your mindset from one of avoidance to one of determination.


        ## Tip: Visualize Success

        
        Visualization is a powerful tool to overcome procrastination. Picture yourself completing the task successfully and experiencing the sense of achievement that comes with it. This mental exercise can motivate you to take the first step.


        ## 6. Create a Routine and Stick to It

        
        Developing a consistent daily routine can help you form productive habits and reduce the temptation to procrastinate. Routines provide structure and make it easier to stay focused on your goals.

        Start by setting a schedule that includes time for work, breaks, exercise, and relaxation. Stick to it as much as possible to build discipline and minimize decision fatigue.


        ## Tip: Set Daily Priorities

        
        Each day, identify the most important tasks to accomplish and focus on those first. This approach, known as "eating the frog," involves tackling the most challenging task at the beginning of the day, giving you a sense of accomplishment early on.


        ## 7. Reward Yourself for Completing Tasks

        
        Another effective way to combat procrastination is to reward yourself for completing tasks, big or small. By offering incentives, you create positive reinforcement that makes it more enjoyable to take action.

        Rewards don’t have to be extravagant. A small treat, a relaxing activity, or even a few minutes of social media time can be a great incentive to keep you motivated.


        ## Tip: Use the "Habit Stacking" Technique

        
        
        Habit stacking involves attaching a new habit to an existing one. For example, after you finish a task, reward yourself with something you enjoy, like watching a favorite show. Over time, this reinforces the habit of working before indulging in rewards.

        ## Conclusion

        Fighting the urge to procrastinate requires self-awareness, discipline, and a commitment to creating a productive environment. By breaking tasks into smaller steps, setting clear goals, identifying triggers, and using positive reinforcement, you can reduce procrastination and increase your productivity. Remember, overcoming procrastination is a gradual process, so be patient with yourself as you work to develop better habits. With the right mindset and strategies, you’ll be well on your way to achieving your goals without delay.
        `,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "February 11, 2025",
      category: "Author's Corner",
    },
    {
      slug: "mastering-javascript-kata",
      title: "Mastering JavaScript: Advanced Kata Techniques",
      content: `Deep dive into advanced JavaScript concepts through practical kata examples and expert solutions.
        
        ## Closures and Scope

Understanding closures is crucial for mastering JavaScript. A closure is formed when a function retains access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. This powerful feature enables data privacy and state preservation in JavaScript applications.

Closures are particularly useful for creating private variables and implementing the module pattern. For example, consider a counter function:

 <pre class="font-mono text-sm text-gray-800 bg-red-800">
       
        
            function createCounter() {
                let count = 0;
                return {
                    increment: () => ++count,
                    getCount: () => count
                };
            }

            const counter = createCounter();
            console.log(counter.increment()); // 1
            console.log(counter.increment()); // 2
            console.log(counter.getCount()); // 2
        
    </pre>

Here, the count variable remains private and can only be accessed through the returned methods, demonstrating encapsulation through closures.

## Functional Programming

Functional programming techniques can lead to cleaner, more maintainable code. JavaScript's support for first-class functions and higher-order functions makes it well-suited for functional programming paradigms. Key concepts include:

- Pure functions: Functions that always produce the same output for the same input and have no side effects
- Immutability: Working with unchangeable data to prevent bugs and improve predictability
- Higher-order functions: Functions that take other functions as arguments or return functions
- Function composition: Building complex functions by combining simpler ones

Common functional programming methods in JavaScript include map, reduce, and filter. These methods promote declarative programming and help avoid mutation of state:

<pre>
<code>

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

const evenNumbers = numbers.filter(n => n % 2 === 0);
 
</code>
</pre>


## Asynchronous JavaScript

Promises and async/await have revolutionized how we handle asynchronous operations in JavaScript. Promises provide a cleaner alternative to callback-based approaches, while async/await offers an even more intuitive way to work with asynchronous code.

Promises have three states:
- Pending: Initial state, neither fulfilled nor rejected
- Fulfilled: Operation completed successfully
- Rejected: Operation failed

Example using async/await:

<pre>
<code>

async function fetchUserData() {
    try {
        const response = await fetch('api/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

fetchUserData().then(data => console.log(data));

</code>
</pre>



Error handling becomes more straightforward with try/catch blocks, and the code reads more like synchronous operations.

## Conclusion

By mastering these advanced JavaScript concepts through kata practice, you'll become a more confident and capable developer. Regular practice with closures helps understand scope and data privacy, while functional programming exercises improve code organization and maintainability. Working with asynchronous JavaScript challenges prepares you for real-world scenarios involving API calls and other async operations.

Remember that these concepts are interconnected – closures often appear in functional programming patterns, and async functions frequently use closures behind the scenes. Continuous practice and application of these concepts in different contexts will strengthen your JavaScript expertise and make you a more effective programmer.

As you continue your journey, focus on understanding not just how to use these features, but also why and when to apply them in your projects. This deeper understanding will help you write more elegant and efficient JavaScript code.
        `,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 10, 2025",
      category: "Programming",
    },
    {
      slug: "kata-success-stories",
      title: "From Kata to Career: Success Stories",
      content: `Meet developers who transformed their careers through consistent practice and dedication to coding challenges.
        
        ## Sarah's Journey
        
        Sarah went from a complete beginner to a senior developer in just three years. She credits her success to daily kata practice.
        
        ## The Power of Persistence
        
        John's story shows how tackling increasingly difficult kata can lead to breakthroughs in problem-solving skills.
        
        ## Kata in the Workplace
        
        Many developers report that skills honed through kata directly translate to improved performance in their jobs.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 7, 2025",
      category: "Career Insights",
    },
    {
      slug: "python-best-practices",
      title: "Python Best Practices: Lessons from Top Kata Solutions",
      content: `Learn Python best practices and clean coding techniques from the most elegant kata solutions.
        
        ## Pythonic Code
        
        We'll explore what makes code truly "Pythonic" and how to write more idiomatic Python.
        
        ## Effective Use of Built-ins
        
        Python's built-in functions and libraries offer powerful tools. We'll look at kata solutions that leverage these effectively.
        
        ## Code Readability
        
        Clear, readable code is crucial. We'll examine kata solutions that exemplify excellent code organization and documentation.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 5, 2025",
      category: "Programming",
    },
    {
      slug: "portfolio-building",
      title: "Building Your Developer Portfolio with Codewars",
      content: `How to leverage your kata solutions and achievements to create a compelling developer portfolio.
        
        ## Showcasing Your Skills
        
        Learn how to select and present your best kata solutions to demonstrate your coding abilities.
        
        ## Kata Difficulty Progression
        
        We'll discuss how to show your growth as a developer through your kata difficulty progression.
        
        ## Integrating Codewars with GitHub
        
        Discover how to effectively link your Codewars profile with your GitHub projects for a comprehensive portfolio.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 3, 2025",
      category: "Career Insights",
    },
    {
      slug: "creating-kata-guide",
      title: "The Art of Creating Kata: A Guide for Authors",
      content: `Expert tips and guidelines for creating challenging and educational kata that engage the community.
        
        ## Choosing the Right Difficulty
        
        We'll explore how to gauge the appropriate difficulty level for your kata to ensure it's both challenging and accessible.
        
        ## Writing Clear Instructions
        
        Learn the art of writing concise yet comprehensive instructions for your kata.
        
        ## Crafting Test Cases
        
        Discover how to create robust test cases that cover edge cases and provide meaningful feedback to users.`,
      image:
        "https://www.lupleg.org/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F7c679591-6991-4402-bc63-0ee97010fc6f-1g.png&w=640&q=75",
      author: {
        name: "Mark Sikaundi",
        avatar: "/placeholder.svg",
      },
      date: "January 1, 2025",
      category: "Author's Corner",
    },
  ];

  return posts.find((post) => post.slug === slug) || null;
}

function formatContent(content) {
  return content.split("\n\n").map((paragraph, index) => {
    if (paragraph.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
          {paragraph.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    );
  });
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-gray-400">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-[#2D1537] hover:text-[#2D1537] mb-6"
        >
          <IoIosArrowRoundBack className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
        <Badge
          variant="secondary"
          className="bg-[#c3aacd] hover:bg-[#2D1537] hover:text-white text-[#2D1537] p-2 ml-4"
        >
          {post.category}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D1537]">
          {post.title}
        </h1>
        <div className="flex items-center gap-3">
          <Image
            src="/mark.jpg"
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
            style={{ borderRadius: "50%", width: 40, height: 40 }}
          />
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-gray-400">{post.date}</div>
          </div>
        </div>
      </div>

      <div className="aspect-[16/9] relative mb-8">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="prose prose-invert max-w-none text-[#2D1537] ">
        {formatContent(post.content)}
      </div>
    </article>
  );
}
