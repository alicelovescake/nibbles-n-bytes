---
title: "8 things I learned in 8 months at Rivian"
excerpt: "Lessons in my journey as a software intern at Rivian"
coverImage: "/assets/blog/rivian/cover.png"
date: "2022-05-19"
ogImage:
  url: "/assets/blog/rivian/cover.png"
---

For the past 8 months, I’ve had the joy of interning at Rivian as a software engineer. [Rivian](https://rivian.com/) is an electric vehicle company trying to preserve the natural world. Forever. This was my first chance to truly try on the hat of a software engineer. It was terrifying and liberating.

Here's 8 things I’ve learned in those 8 months! 👇 👇

## 1. Focus on your direction, not your destination.

When I started, I couldn’t imagine myself as a software engineer. I didn’t believe I was capable of solving technical problems. But my North Star has always been my curiosity. Taking on new challenges is what I love and Rivian gave me a real opportunity to be like any other engineer.

I’m here today because I took daily steps in the direction I wanted to go, even when the destination was unclear.

> Figure out your direction and start walking!

## 2. Be brave enough to suck.

Everything seems hard as a new developer. In the first few weeks I remember being paralyzed with fear just upgrading NPM packages. Yet I did it and survived without shipping bugs to production. The next set of unknowns came when I configured AWS API Gateway with [Serverless](https://www.serverless.com/framework/docs/providers/aws/events/apigateway) to enable routing of events to a microservice. Rather than let fear take over me, I found the courage to try. Sure, I ran our Gitlab pipeline 50 times 🤫 but I eventually got it to work while getting exposed to technologies like [CloudFormation](https://aws.amazon.com/cloudformation/), [Route53](https://aws.amazon.com/route53/), VPCs, and the inner workings of our CI/CD.

> It’s what you learn while sucking that makes it all worth it.

## 3. Always ask why.

Ask why is one of Rivian’s 5 core values. It has taught me to challenge assumptions and constantly ask why when figuring out how something works. When I was tasked with creating a new [Kubernetes](https://kubernetes.io/) repo, I reviewed other repos and noticed they were all using similar templates.

Rather than copying the same code, I wanted to understand the why. In the process I discovered more efficient ways to build our [Docker images](https://www.docker.com/) that improved performance and used wrappers to reduce our code from 500 lines to 50 lines.

Approaching this task from a beginner’s mind not only allowed me to find a better way but also gave me an opportunity to prepare a teach back for the team so that we could grow together.

## 4. Competence is not a matter of knowing everything. It’s knowing nothing and deciding that you will figure out how to solve the problem anyways.

The more work that I do, the more issues I ran into where:

- I don’t know
- My teammates don’t know
- Google doesn’t know
- I gotta figure it out anyways

Software is vast and ever-changing. No one knows everything. Being a wizard who can solve any problem means being knee deep in ambiguity and finding a solution.

My mentor, our Staff engineer, set up a new project with [Redux Toolkit](https://redux-toolkit.js.org/), a library for front-end state management. When he left for vacation, I had an “oh shit” moment realizing there was no clear way to asynchronously fetch data from our backend with Rivian’s [GraphQL client hooks](https://www.apollographql.com/) due to incompatibilities. There were no answers in official docs or StackOverflow because Rivian had a unique workflow.

Suddenly I realized that this is why they pay a human (me!!) with a brain who can investigate and learn. Figuring out the solution to this problem was extremely empowering because I learned that the magic doesn’t come from knowing answers.

> A true wizard is someone who gets her hands dirty, asks questions, experiments and debug!

## 5. Mentorship is NOT a shortcut to success. You have to struggle to learn.

I won the lottery by being placed on the team I was at Rivian. Every single engineer is smart, helpful, kind, and generous with their time. A special shoutout to Layton, my mentor through the 8 months. I insisted on a 1 on 1 with Layton every single week when I first started because I wanted to absorb all the knowledge and expertise he had. I thought he had the secrets to accelerate my learning.

But the truth is, the greatest teacher is called “doing”. I remember asking Layton what's the difference between React controlled and uncontrolled components. He sent me a link to the docs. Even reading the docs, I didn’t fully completely understand it until I had to add a controlled component into a form. Nowadays, I try to Google first, and ask for help when I’ve tried a few solutions first.

> Mentorship has fueled my growth in so many ways, but it didn’t replace the work I had to do on my own.

## 6. If you don’t feel like an imposter, you are in the wrong room.

Have you ever had feelings of self-doubt and fears that you are not good enough? Everyone suffers from imposter syndrome. To me, it means:

- You're getting out of your comfort zone, which equals growth
- You're working with people smarter than you, which equals growth

At Rivian, I was treated like a real engineer even though I had zero experience. I worked with people who inspired me by their intelligence and their strong desire to learn. It’s impossible to know everything in development, so I organized Rivian’s Learning Club and Eng Book Club where engineers across different teams can come to discuss technical topics and learn together.

> In the end, feeling like an imposter was actually a signal that I was in the right place.

## 7. Take ownership, even if you are just an intern.

Some people might think interns just make a wicked pot coffee. But right from the start, Rivian gave me the opportunity to take ownership for the projects I worked on. It was a 2 way street. The senior leads on the project made me feel included by asking for my opinion and feedback on architecture decisions and involving me in every meeting with the product manager, designers, and brainstorming sessions. In return, I contributed by not only fixing bugs but taking an active role in driving the project forward. When I had questions about the data model, the backend lead asked me to design my own version and we were able to discuss the pros and cons of each approach after.

> Whether you are an intern or the CTO, having a sense of ownership results in making decisions with more thought, responsibility and care!

## 8. Forever starts now.

Rivian taught me that with software, I have the power to act on the world. With the tools I build, I can create a beautiful story of a world that could exist. A world that can continue to sustain life, enchant future generations, and be a place worth exploring. Forever.

The next step in my journey is an internship at [Meta](https://about.facebook.com/meta/). I’m excited to continue crafting my story as a software engineer.

What’s the story YOU want to tell?
