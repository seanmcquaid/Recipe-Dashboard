# Recipe Dashboard
Created a simple Recipe Dashboard to try TDD and some performance optimization concepts in React!

## What I Learned

#### TDD
I always have wanted to try TDD but have never really been able to at work due to consistently changing requirements. So I wanted to at least try this on a smaller personal project. I will say that at first, I definitely struggled to write tests without coding first. However, by the end of the project, it felt a lot more seamless. I definitely will start doing this outside of work!

#### React Testing Library - Better the Second Time Around!
I initially had struggled with React Testing Library because it was such a shift from Enzyme in terms of the mentality of focusing on the user instead of implementation. Funny enough, I found that writing my tests with React Testing Library almost felt like writing E2E tests because it was so user focused. After reading the docs a bit more and reading some really solid articles online with some solutions, I feel I have a much better grasp on testing patterns and strategies. I definitely plan to use this library going forward instead of Enzyme!

#### Optimizing Rendering of Components
As I continue to look at where I could grow, I realized that while my code may be clean (hopefully), that I am not always considering performance and the amount of renders for each component. After the project was done, I used the Profiler from React Dev Tools and looked at how each of my components were rendering. After noticing excessive amounts of rendering on components that had absolutely no prop changes, I decided to introduce React.memo, useCallback and useMemo to try and limit this where appropriate. Definitely noticed a slightly overall faster rendering of each page and saw this in the Profiler.