(function (app){

angular.
  module('goorooWebapp')
  .controller('blogController', function($scope, $location, $http, $state, $stateParams, ENV, $window) {
      // this is the format of the list of posts (add newest posts to top)
      // posts.push({
      //    id: '',
      //    img: "", <-- author image
      //    shareImg: "", <-- image shown when link is shared
      //    title: "",
      //    encTitle: "", <-- http://www.sharelinkgenerator.com/ for help
      //    specialDscrpt: "", <-- optional
      //    date: "",
      //    author: "",
      //    authorLink: "",
      //    preview: "",
      //    content: "",
      //    subjects: "",
      //    topics: "",
      //    url: "",
      //    popular: true/false   <-- featured popular posts
      // });

      $scope.$state = $state;
      $scope.quantity = 20;
      
      $scope.main = {
        id: '',
        title: "Home",
        url: "public/views/blog/main.html"
      };

      $scope.search = {
        id: 'search',
        title: "Search",
        url: "public/views/blog/search.html"
      };

      $scope.posts = [
        {
        id: 'understanding-and-inspiring-students',
        img: "https://s3.amazonaws.com/goorooprofileimages/F4821985-1F7E-4EB1-B788-18F11C9AE785-1071-000000F3C7BB1BC3.png",
        shareImg: "http://3.bp.blogspot.com/-dpvgOfmvDgc/WZyGolcSkTI/AAAAAAAAAGs/XTxyqFnAl3QlL64O-hcV7WSpfT0e_MoSACK4BGAYYCw/s1600/_MG_2759.jpeg",
        title: "Understanding and Inspiring Students",
        encTitle: "Understanding%20and%20Inspiring%20Students",
        date: "August 22, 2017",
        author: "Shuyi F.",
        authorLink: "https://www.gooroo.com/tutor/HkBHU3amyHvZundFIMAcbGaoXQODUquOptat/",
        preview: "One thing I’ve learned in my years tutoring is that it’s not effective to force information onto a child who isn’t excited to learn. In high school, my mother and I ran a local after-school center in a neighborhood full of immigrant families",
        content: "“We shouldn’t teach great books; we should teach a love of reading. Knowing the contents of a few works of literature is a trivial achievement. Being inclined to go on reading is a great achievement.” ― B.F. Skinner One thing I’ve learned in my years tutoring is that it’s not effective to force information onto a child who isn’t excited to learn."+
                "In high school, my mother and I ran a local after-school center in a neighborhood full of immigrant families. I’ve worked with a lot of the children of these communities, who struggle to keep up with their classes as they are unfamiliar with the language they are taught in and aren’t able to get help from their parents. They are often frustrated because they are already behind the learning curve and are made to believe that they are not as worthy as others to learn the material in the classroom. Young minds are the most impressionable and the susceptible to believing what they’re told. The combination of constantly receiving poor grades and hearing discouraging words can be dangerously damaging to a child’s confidence in his ability to learn. Although it is never too late to provide encouragement, it is easiest to create a love of learning early on. I believe that all kids have a natural desire for learning, but not everyone learns the same way. To be a great teacher, you must first be a student and learn about your student. Dedication to this is what gives private tutoring great merit."+
                "Understanding the way your student learns best allows you to provide encouragement in the way he needs it. In my experience, one of the most effective methods of inspiring a desire to continue challenging work is to help the student prove to himself that he is making progress. This can be achieved by setting realistic goals and noting the strides taken towards mastering a skill. The chance to inspire a student to believe in themselves and strive to excel is what makes teaching valuable to me.",
        subjects: "the SHSAT and High School Math",
        topics: ["Advice", "Tutoring"],
        url: "public/views/blog/understanding-and-inspiring-students.html",
        popular: false
        }, {
        id: 'low-stakes-summer-writing',
        img: "https://s3.amazonaws.com/goorooprofileimages/BF7DE049-5E8F-43BE-994A-B53B90A3D83E-351-00000017DD4252E5.png",
        shareImg: "",
        title: "Low-Stakes Summer Writing",
        encTitle: "Low-Stakes%20Summer%20Writing",
        date: "August 17, 2017",
        author: "Danielle B.",
        authorLink: "https://www.gooroo.com/tutor/V1De9cugc2i3Vj6r03ykUH2cUBBJSxzJ6N6g/",
        preview: "During the school year, students are constantly asked to write. Whether it is a full-length essay, short answer responses on a quiz, or simply a written exit slip, writing done at school is usually being evaluated. This type of writing has been",
        content: "During the school year, students are constantly asked to write. Whether it is a full-length essay, short answer responses on a quiz, or simply a written exit slip, writing done at school is usually being evaluated. This type of writing has been coined high stakes writing, because it is almost always done in an environment where the student is under pressure. The stakes can be especially high if a piece of writing determines a final course grade, admission to a dream college, or even acceptance into a publication. However, writing experts point out that only partaking in high-stakes writing assignments can hinder the growth of emerging writers. Composition scholar Peter Elbow says, “when there’s frequent low stakes writing, high stakes writing goes better.”"+
                "This is because when students have opportunities to write without being evaluated, they can try to figure out complex or confusing ideas, take more risks, and experiment with different forms of writing. Elbow explains, “low stakes writing is usually livelier, clearer, and more interesting…” He continues, “When students write for a grade, they tend to play it safe – making large generalizations and running away from what they are not sure of. Low stakes writing leads them to explore perplexity...”"+
                "As an English teacher, I take this research to heart and try to incorporate low-stakes writing into my classroom by giving my students opportunities to write, either for themselves or for peers, with the knowledge that they will not be assessed or graded. Tutoring is also an excellent opportunity for low-stakes writing practice. Those extra exercises outside of the formal classroom setting can give students the space to formulate ideas that will boost their writing skills for high-stakes assignments. However, there are also myriad ways to practice low-stakes writing individually over the summer to be extra prepared for the return to school in the fall. Here are three ideas for low-stakes, assessment-free, summer writing:"+
                "1. Keep a travel journal. Whether you are jet setting around the globe or checking out new spots in NYC, keep a journal of all of your summer adventures. Make a routine of writing in your journal once a day, every other day, or once a week, to document what you do and see. Include any and all hilarious, surprising, or inspiring anecdotes."+
                "2. Make a scrapbook. From all of your summer adventures, you will probably snap a picture or two as a keepsake. Arrange your printed photos into a scrapbook, decorate as desired, and then write a description on each page of the event to remember where the pictures are from. Bonus points if you put captions under each of the photos!"+
                "3. Write a mini biography series. During the school year we tend to encounter the same folks every day – our families, teachers, and classmates. But in the summer, we often happen upon more people than usual, from different walks of life. Take the time to get to know any new people you meet by asking a few questions and writing down your interviews. Then, summarize their stories into mini biographies so you have a collection of all the people you have encountered during your summer."+
                "writing tips, writing advice, college essay advice",
        subjects: "English and Writing",
        topics: ["Writing", "Advice"],
        url: "public/views/blog/low-stakes-summer-writing.html",
        popular: false
        }, {
        id: 'how-i-got-into-a-top-college',
        img: "https://s3.amazonaws.com/goorooblogimages/gooroo-tutors.png",
        shareImg: "https://s3.amazonaws.com/goorooblogimages/College+brochure.jpg",
        title: "How I Got Into a Top College",
        encTitle: "How%20I%20Got%20Into%20a%20Top%20College",
        date: "August 8, 2017",
        author: "Gooroo Tutors",
        preview: "The college application process can get brutal. When I got deferred from Cornell, I was confused and frustrated; I went through scenarios of what I could have done differently. Should I have taken the SATs another time? Maybe my Common App was all",
        content: "Going through the college application process can definitely be stressful and daunting. We've been through it before, and we've learned a lot from it. With college applications lurking around the corner, we've put together a bunch of our experiences applying to college to offer you some post-application wisdom. The college application process can get brutal. When I got deferred from Cornell, I was confused and frustrated; I went through scenarios of what I could have done differently. Should I have taken the SATs another time? Maybe my Common App was all wrong. It definitely didn't help that I would religiously check College Confidential's ‘Acceptance Stats’ post-deferral. You may get those moments of self-doubt or think your life is over because your dream school didn't accept you. As discouraging as the process is, don't give up. After my deferral, I contacted the Cornell admissions so often that they knew my name whenever I called. I emailed them with a new recommendation letter, and made sure they looked over my updated transcript. No one knows exactly what an admission officer is thinking when they see your application, but have faith in your capabilities, and I promise it will work out. Sue L., Cornell University '18"+
                "While the college application process can be incredibly stressful, there is one thing I did that made it a lot easier. All through junior year, I was dreading senior year fall which everyone said was the hardest semester in high school. I was overwhelmed with how hard this semester was going to be and how I was never going to sleep or ever see my friends. However, my brother gave me some really important advice that made my senior fall much easier. He told me to try to do as much as I could over the summer. He recommended writing my major essays and doing a lot of standardized test prep. I followed his advice and it made senior fall a breeze. I was able to focus on my schoolwork knowing that much of the work for my applications was done and that I was prepared for the ACT. Peter M., University of Notre Dame '20"+
                "I always enjoyed writing, so the CommonApp essay prompt was an exciting assignment for me. I wrote several short essays about past memorable experiences and as a passionate musician, I chose one about a negative performance experience I had and how I coped with it through poetry. It was one of the most humiliating experiences of my life, but I felt that it best reflected the most about my passions and my attitude towards failure. I was anxious because I never got an interview like other students at my school who had applied to Columbia ED like I did. I prepared myself for rejection, but on December 11th, I received an acceptance letter.One thing I learned about the college application process is that it is important to use your best assets to show what you are passionate about and not be afraid to stand out. The essay is a great medium through which you can show a part of yourself that isn’t on your resume to admissions officers, and offering an essay that they will remember will only help you. Yuna S., Columbia University '19"+
                "Your essays should include stories but not just be stories. Stories and specific moments are a tool to convey something about yourself. They are a means to an end. When I wrote my essays, I started by typing out descriptions of as many meaningful moments in my life as possible. The next day, I reread them and looked for recurring themes. Many students I have tutored struggle with picking themes for their essays because they aren't comfortable with taking the time for self exploration. You must be confident in your own self image before you try and present that image to anyone else. I wove together the stories that fit my favorite themes, edited them, and those became my essays. Ultimately, my essays were less contrived because they were about themes that I actually saw in my life. Beyond just improving my essays, this process was rewarding and therapeutic because it gave me a better understanding of myself. Spencer G., University of Chicago '21"+
                "After both of my older siblings were accepted to and enrolled at Duke, I mistakenly believed I could piggyback off of their success. I chose not to spend too much time on my application and personal statement, thinking my legacy status would be enough to get accepted, but it wasn’t. I received my rejection letter in the middle of December and panicked. I spent the next two weeks toiling over every detail of my application and rewrote my personal statement to focus more on my accomplishments and less on my family’s. By the end of the process, I had applied to 21 colleges. I now attend Cornell University. I could not be happier with my experience with the university so far. I recommend all students start the process early with an open mind. In the end, you’ll be happy wherever you end up. Jay K., Cornell University '18"+
                "As the eldest child of an immigrant family, tackling the college admissions process meant entering new territory. First semester senior year of high school was one of the most stressful of times. Attending a school as large and competitive as Stuyvesant, I felt myself falling victim to following the crowd and simply looking at the schools that everyone seemed to be applying for. As I wrote my essays, I realized that I didn’t feel passionate about most of the programs at these schools. To gain more exposure to the different schools available to me, I attended numerous college fairs and presentations. Visits to my guidance counselor helped me narrow down the options to those with programs that were best suited for the career path I wanted to pursue. Although these school-provided resources were informative, I felt they didn’t give me insight on whether the culture of each school would provide an environment that I could see myself growing and thriving in. It wasn’t until I spoke with current students of each college that I felt I had an idea of what attending the school would feel like. Upon my acceptance to Notre Dame, they invited me to a sponsored campus visit during which I would stay in their dorms with a student host and interact with other current students. After my stay, deciding to make Notre Dame my home for the following four years was an easy choice. Shuyi F. University of Notre Dame '18"+
                "college application tips, college application advice, how to get into a good college",
        topics: ["College Application", "Advice", "Studying"],
        url: "public/views/blog/how-i-got-into-a-top-college.html",
        popular: true
        }, {
        id: 'leveling-the-playing-field-in-the-bronx',
        img: "https://s3.amazonaws.com/goorooblogimages/nora.jpeg",
        shareImg: "https://s3.amazonaws.com/goorooblogimages/noras-post.jpeg",
        title: "Leveling the Playing Field in the Bronx",
        encTitle: "Leveling%20the%20Playing%20Field%20in%20the%20Bronx",
        date: "July 27, 2017",
        author: "Nora W.",
        preview: "When I was a junior at Bronx Science, I decided to start tutoring due to my personal experiences at my school, and GGB gave me that opportunity. Furthermore, Gooroo trained me and helped me build the confidence to teach. Every Saturday, I volunteered with ESPI to help 5th grade students prepare for the Math State Test",
        content: "Working with Gooroo Gives Back was an extremely fulfilling experience for me. GGB is a program that works with the Department of Education and Exam Schools Partnership Initiative to help give under-resourced students access to private, specialized education that other students have. When I was a junior at Bronx Science, I decided to start tutoring due to my personal experiences at my school, and GGB gave me that opportunity. Furthermore, Gooroo trained me and helped me build the confidence to teach. Every Saturday, I volunteered with ESPI to help 5th grade students prepare for the Math State Test."+
                  "Before starting I went to their training session, which was nice because I built confidence learning about good tutoring methods and I got to know other people in the program. Gooroo keeps in touch with various programs, and so oftentimes you get to choose what age range to tutor and what subject you want to teach. So, I started tutoring 5th graders in math, as part of a larger goal of getting gifted students from certain low income neighborhoods into elite high schools. Volunteering meant something to me personally because at Bronx Science I notice the low percentage of black and Hispanic students, and I became part of an effort to change that."+
                  "Being a tutor is about so much more than just teaching how to solve a math problem. I got to work with some really motivated, supportive, and especially funny students. One day, the seating was rearranged in the classroom and a very quiet girl was seated next to a talkative girl and two talkative boys. In between math problems they joked around and made the quiet girl giggle along, and they still finished their work quickly. She became more comfortable, not only asking me questions but also her group mates, and the whole table would solve the tough questions together."+
                  "Honestly, sometimes I'd be amazed at how quickly they solved problems that took me a while to figure out. A few times a group would ask me to help with a problem I hadn't solved yet, and in those cases it always worked to ask the group to think aloud and explain their ideas to each other. For example, I'd rephrase parts of the word problem I knew would be part of the first steps to get them thinking, and listen to them explain their thoughts in ways clearer than I could have explained, until together they figured out the answer with just a little bit of guidance that I figured out along the way, together with them. Some moments while tutoring are obviously harder, such as when a student loses hope in their ability to solve tough problems, but I honestly feel that I was able to make a difference. Sitting down next to someone and encouraging them helps them pick their pencil up again and give another attempt, or feel more confident about their upcoming test after reviewing strategies step by step."+
                  "By the end of the spring term of the program, I had gotten to know a lot of kids in the class by working in various small groups, and so my favorite moment was when people shared their poetry and short stories. Tutoring is my favorite way of volunteering and I plan on continuing for a long time. Gooroo Gives Back is an especially important organization because it brings opportunities to those who otherwise wouldn't have access to tutoring but deserve to, and it really does make a difference.",
        topics: ["Tutoring", "Personal"],
        url: "public/views/blog/leveling-the-playing-field-in-the-bronx.html",
        popular: false
      }, {
        id: 'are-my-sat-scores-good-enough-to-get-into-a-top-college',
        img: "https://s3.amazonaws.com/goorooblogimages/gooroo.jpg",
        shareImg: "https://s3.amazonaws.com/goorooblogimages/Ivy+League+logos.png",
        title: "Are My SAT Scores Good Enough to Get Into a Top College?",
        encTitle: "Are%20My%20SAT%20Scores%20Good%20Enough%20to%20Get%20Into%20a%20Top%20College&#63;",
        specialDscrpt: "&lt;b&gt;Looking for help?&lt;/b&gt; For specialized one-on-one help or advice with the SAT/ACT or college applications, &lt;a href='gooroo.com/search' style='font-weight:400;'&gt;check out some of our expert tutors&lt;/a&gt; from top colleges or &lt;a href='gooroo.com/findgooroo' style='font-weight: 400;'&gt;ask us for help&lt;/a&gt; finding your perfect Gooroo.",
        date: "July 25, 2017",
        author: "Gooroo",
        authorLink: "https://gooroo.com/contact",
        preview: "There are several factors besides your SAT score that admissions officers look at when reviewing your college application. That said, you are at a much greater advantage if your SAT scores are within a safe range. But what exactly is a safe SAT score?",
        content: "As you well know, there are several factors besides your SAT score that admissions officers look at when reviewing your college application. That said, you are at a much greater advantage if your SAT scores are within a safe range. But what exactly is a safe SAT score? The new 2016 SAT was designed to equalize the playing field and test what you’ve learned in high school as well as what you’ll need to succeed in college, rather than test more arbitrary things such as how complex your lexicon of abstruse vocabulary is or how well you are able to memorize facts. The Ivy League is extremely competitive, and their test scores can prove it. Below is a list of how the (latest released) middle 50% of Ivy League admitted students scored on the SAT (converted if pre-March 2016 SAT) and ACT. Note that this means that 25% of the class scored lower and 25% of the class scored higher. The Ivy League does not have a test score cutoff, so if you're slightly below this range, so are 25% of the students at these schools. At the same token, a perfect test score does not ensure an acceptance letter. But if you are within these ranges, you're in the game. (Scroll to bottom to see the middle 50% test scores for the US's top 50 colleges.)"+
                "So how can I raise my scores? There are many different ways to prepare for the SAT, but the most important thing you can do is understand the types of questions that will appear on the test. Here are some types of questions you should expect to see on the new 2016 SAT along with some tips: Reading and Writing: (Note that the new SAT does not focus as much on knowing obscure vocabulary, but rather contextualizes all of its questions based on the passage, focusing more on context analysis.) Main idea questions Finding the main idea Tip: Take into account the first and last sentences of each passage and look for a thesis and major points. Something that might seem important in the middle of a passage might not actually have to do with the main point. Passage-based interpretation Understanding the connotations and nuances of words and sentences Tip: Don’t waste too much time studying obscure vocabulary definitions, as all vocabulary questions will be put in context, giving you clues. (That said, vocabulary is important so don't overlook it completely!) Tip: (especially for slow readers) Take a look at the questions before fully reading through the passage so that you have an idea for what to look out for. Supporting evidence Finding evidence for a claim within a passage Tip: Read all the choices and see how they all relate to the main idea before selecting the first choice that seems right. Inferences Thinking from the author’s point of view and making an educated inference Tip: Make sure you understand the main idea of the passage first, use the process of elimination, and follow your gut. Interpreting graphs and charts Note: The new SAT has reading passages based on Social Studies, Science, and US/World Literature, meaning that you will see some graphs and charts. Understanding how to analyze visual data (similar to the ACT Science section)"+
                "Grammar constructs Understanding grammar conventions (i.e. subject/object, verb tenses, consistent parts of speech) Math:(Note that you may use a calculator for only one of the two sections: but don’t worry! The non-calculator sections was designed so that you will not need one.) Algebra I and II Note: Algebra accounts for over half of the questions, so make sure to have a good understanding of all the major topics! Analyzing and creating linear, exponential, and quadratic equations Solving systems of equations Simplifying equations (FOIL, conjugates) Solving equations with i (standard form: a + bi) Understanding how to convert words into equations with variables Understanding probability formulas (AND = X, OR = +) Solving relative time/size equations (i.e. John takes 2 hours to build a house, but his father takes 1 hour. How long would it take for them to build 4 houses together?) Geometry Using geometric formulas to solve problems Trigonometry Note: Trigonometry is a new addition to the SAT, but it only accounts for around 5% of the questions, so don’t spend too much time focusing on it! Understanding the Pythagorean Theorem Using sine, cosine, tangent (SOHCAHTOA) Essay: For the new SAT, the essay is optional, so if you’re not a strong writer and you know that none of the schools you are applying to require it, you can freely omit it. However, most competitive schools will require you to take the essay, so if you’re shooting high or you’re a strong writer, it will very much interest you to take it. Unlike the old SAT, you have 50 minutes to read and analyze a passage and then write about how the author constructs an argument for his/her audience, without expressing whether you agree or disagree. Tip: Take some time to outline your essay and figure out what points you want to make, so that you’re not aimlessly writing away without structure."+
                "The best way to prepare for the SAT is to take as many practice exams as you can, in a real test-like setting: in a quiet room and timed, using a real answer sheet to take into account the time it will take to fill out your answers. Figure out which types of problems you struggle with the most and think of strategies that will help you solve them better. You can find some free online practice exams on the College Board website. College Board also offers a free app called Daily Practice for the New SAT, which asks you one SAT-esque question everyday. Should I take the SAT or ACT? The most important thing to keep in mind when deciding whether to take the SAT or ACT is which schools you want to apply to. Traditionally many Midwestern schools preferred the ACT and coastal schools preferred the SAT, but today most schools place equal weight on both exams. Don't worry too much if you don't know where you want to apply yet. No school will require you to take both, and the ACT and redesigned SAT now have many similarities. However, there are slight differences between the two, so you might want to think about your strengths and weaknesses when picking an exam. The ACT includes a science section, as the SAT does not, so if you’re particularly science-savvy and strong in critical thinking, the ACT may be a good option. However, the SAT permits you slightly more time to think in the Reading and Writing sections than the ACT does. One good way to pick an exam is to try practice tests for both and see how you perform. What else can I do to impress colleges?"+
                "Though you might have great test scores, so do many other students applying to top colleges. The key is to stand out. Test scores definitely matter, but they are not everything. It is important to show colleges what you are passionate about and that you have something to contribute to their communities. Whether your passion is for cooking, golf, playing the cello, or debate, most schools will have clubs and communities that cater to it. And if admissions officers can see that you would fit in with their community and that your passion would make a notable contribution, they are more likely to see you at their school. It is great to be well-rounded and involved in school activities and extracurriculars, but it is better to be very strong in one or two areas than not very invested in numerous areas. America's Top 50 Colleges Here is the middle 50% new SAT score range for America’s top 50 universities and colleges ranked by U.S. News’ 2017 Top National Universities. Princeton University: 1470-1590 Harvard University: 1470-1580 University of Chicago: 1460-1550 Yale University: 1490-1600 Columbia University: 1510-1580 Stanford University: 1390-1580 Massachusetts Institute of Technology: 1500-1600 Duke University: 1400-1590 University of Pennsylvania: 1470-1590 Johns Hopkins University: 1480-1560 Dartmouth College: 1420-1580 California Institute of Technology: 1530-1570 Northwestern University: 1400-1560 Brown University: 1440-1570 Cornell University: 1400-1550 Rice University: 1440-1590 University of Notre Dame: 1390-1530 Vanderbilt University: 1420-1590 Washington University in St. Louis: 1460-1570 Emory University: 1330-1520 Georgetown University: 1380-1540 UC Berkeley: 1300-1550 University of Southern California: 1380-1520 Carnegie Mellon University: 1460-1570 UC Los Angeles: 1230-1500 University of Virginia: 1330-1510 Tufts University: 1440-1550 University of Michigan - Ann Arbor: 1390-1540 Wake Forest University: 1320-1500 UNC - Chapel Hill: 1260-1470 Boston College: 1340-1510 College of William and Mary: 1320-1510 University of Rochester: 1320-1510 Brandeis University: 1370-1520 Georgia Institute of Technology: 1400-1530 New York University: 1310-1510 Case Western Reserve University: 1310-1470 UC Santa Barbara: 1220-1460 Boston University: 1300-1490 Northeastern University: 1400-1540 Rensselaer Polytechnic Institute: 1340-1510 Tulane University: 1330-1480 UC Irvine: 1150-1410 Lehigh University: 1300-1470 UC Davis: 1140-1420 UC San Diego: 1300-1520 UI - Urbana-Champaign: 1380-1530 University of Miami: 1280-1460 University of Wisconsin - Madison: 1280-1470 Pennsylvania State University: 1160-1360"+
                "college application tips, college application advice, how to get into the ivy league schools, college essay advice, college essay tips, SAT or ACT, SAT tips, ACT tips, SAT advice, ACT advice",
        topics: ["College Application", "SAT/ACT", "Advice", "Studying"],
        url: "public/views/blog/are-my-sat-scores-good-enough-to-get-into-a-top-college.html",
        popular: true
      }, {
        id: 'teaching-my-unexpected-passion',
        img: "https://s3.amazonaws.com/goorooprofileimages/79F01DE7-C0EC-4D34-ACEF-0583BD249E7F-2232-0000074DC5F12C08.png",
        shareImg: "https://s3.amazonaws.com/goorooprofileimages/79F01DE7-C0EC-4D34-ACEF-0583BD249E7F-2232-0000074DC5F12C08.png",
        title: "Teaching: My Unexpected Passion",
        encTitle: "Teaching&#58;%20My%20Unexpected%20Passion",
        date: "July 24, 2017",
        author: "Elianna G.",
        authorLink: "https://www.gooroo.com/tutor/EliannaG/vVeLCKrYXFPznJR9qdNGeT0XNzd6cfLwOCi1/",
        preview: "As I trudged through my graduate degree, buried in theories of grammar and semantics, it was not uncommon for a well-meaning family member to call and inquire after my career goals. Grandma, in particular, was unrelenting. You should teach, Elie! ",
        content: "As I trudged through my graduate degree, buried in theories of grammar and semantics, it was not uncommon for a well-meaning family member to call and inquire after my career goals. Grandma, in particular, was unrelenting. You should teach, Elie! Why don’t you listen to your grandma? she would opine in her sweet, twangy voice. Maybe later in life, I’d say. I privately scoffed at the idea. Not that I didn’t have great respect for teachers - I certainly did - but because this inquiry is the plight of so many graduate students entrenched in academia."+
                "We don’t HAVE to be teachers! we’d yell at the world, holding “alternate career” days to prove it."+
                "To me, teaching would mean forging through a PhD, never leaving the institution. Succumbing to a predetermined path. I didn’t want to, okay? I was going to graduate and then be a grant writer and editor, while doing freelance graphic design on the side. I was artsy, damnit."+
                "Unsurprisingly, I couldn’t make this lofty goal a reality after leaving school. I had moved back to New York and rent came hard and fast. I signed up for Gooroo, and a myriad of other tutoring sites. Grasping at straws, I thought: I’ll edit kids’ papers… that’s pretty much like editing grants. Gooroo was the only service to vet me (besides a ludicrous site - name omitted - that gave me an “online IQ test” asking me questions such as [sic] “Did Ayn Rand write The Hobbit?”). Indeed, Gooroo met me in person, and gave me my first client, a little girl named Salina. She and I settled in together weekly, working in a bright little cafe, sharing ginger cookies and iced tea. Nouns and verbs, synonyms and antonyms, great blocky letters, shiny new words. Untangling, deciphering, defining, decoding; strolling through these great forests of words, making countless drawings when language hit its threshold for description. I came to learn her style (artistic, patrician, a natural storyteller), and adapted our lessons accordingly; we giggled madly as we raced to match up vocabulary words with our neon post-it drawings spread over three tables. All of it was new to me but intimately familiar."+
                "Over time, I gained more clients through Gooroo’s generous referrals. I worked with more children, taking particular pleasure in their special breed of wisdom (my favorite takeaway: the word “misery” implies “homelessness,” in the sense that one “looks for home but cannot find it”). Tutoring middle school brought its own sense of satisfaction in revisiting books long forgotten, tracing their impact through the canon of pre-teen morality lit. Every case was different, every student’s struggles and triumphs a learning experience. With regular clients I learned to make systems: did we need visual aids, big color-coded grids to be laid out, mosaic-like, on the floor? Did we need notecards paired with images, mnemonics that jingled, acronyms that rhymed, analogies that provoked? What was the nature of the struggle, how could it be targeted elegantly? These questions never had easy answers. But I learned to ask them, and to listen to the clues that the students provided."+
                "I am happy and proud to say that I think many of my methods and teachings catalyzed improvement in real time. I took joy in using my knowledge of linguistics - particularly child language acquisition - to create personalized methods of content absorption and comprehension. I never thought that outside of graduate school I would sketch out phonetic inventories or syntax trees, but this knowledge was invaluable to informing my understanding of skill progression. I never thought I would talk art history with kids, or use graphic design to make illustrations of a punctuation mark’s personality (hello, your Majesty the Comma Queen). What surprised and delighted me most about tutoring and teaching was this. It was a way for me to bring these skills together, to be creative, to use a little bit of each degree, a little bit of everything. And this was how I came to know that teaching is my métier, because nothing has ever come so naturally to me in my life. Coming from academia, I think we can be brainwashed into believing what I did - that teaching is a “predetermined” route. But I don’t think so now. And even if it is, so what? We should be willing to be more open about how we consider the protean nature of our skills."+
                "Undoubtedly teaching full time (which I will be doing come fall) will come with its own set of challenges. Certainly I will miss the ability to work one-on-one, and the privilege of almost unlimited time to individualize my teaching. I’m not sure if anyone feels prepared to enter the classroom for the first time, but this past year has undoubtedly given me some measure of fortitude for the experience, most importantly by showing just how challenging the nature of the work can be. Learning is never linear. Progress cannot be easily described or quantified, especially in regards to language skills. Language is mysterious and mutable. Reading and writing tests our empathy and our very ability to make sense of and describe the world. But though the challenges can be immense, the rewards are far greater. More than anything, the act of teaching is an act of learning. I want to thank every student I’ve had for teaching me, and thank Gooroo for giving me the opportunity to learn.",
        subjects: "English, Reading, and Writing",
        topics: ["Tutoring", "Writing", "Personal"],
        url: "public/views/blog/teaching-my-unexpected-passion.html",
        popular: false
      }, {
        id: 'in-defense-of-poetry',
        img: "https://s3.amazonaws.com/goorooprofileimages/5b7e23ba-5046-4688-92ae-9966e64adb19.jpg",
        shareImg: "https://s3.amazonaws.com/goorooblogimages/in-defense-of-poetry.jpg",
        title: "In Defense of Poetry",
        encTitle: "In%20Defense%20of%20Poetry",
        date: "July 20, 2017",
        author: "Hannah P.",
        authorLink: "https://www.gooroo.com/tutor/HannahP/LfYDiv8knQnSqQLoTPrbmMCuaL4cNb3nex9K/",
        preview: "When I first started dating my boyfriend, he told me that he hates poetry. “I write prose,” he said, dismissing what sometimes seems like the entire reason for my existence in one fell swoop",
        content: "When I first started dating my boyfriend, he told me that he hates poetry. “I write prose,” he said, dismissing what sometimes seems like the entire reason for my existence in one fell swoop. When I questioned him further, he explained that he sees poetry as just a bunch of stuffy rules. He can’t write in meter. He doesn’t like rhyming. Besides, the meaning of a poem is often just inscrutable. Who has time for that?"+
                "Let me just get this out there: I hate rules probably more than the next person, especially when it comes to writing. And aside from the odd limerick or quatrain assigned to me in college, that’s never really been a problem for me as a poet (elsewhere in my life, well, that’s a different story for another time). That isn’t to say that the occasional rhyme doesn’t have its place in good poetry, and there is certainly a lot of value in being sensitized to musicality and rhythm when it comes to writing poetically, but my personal tendency to throw poetic forms out the window has never been an issue for any poetry professor that’s ever taught me. Certainly as a poet it can be fun to limit oneself structurally once in a while (or more than once in a while, as there are absolutely poets who enjoy working within a preconceived format), as this can actually force one to rev up the creativity in certain ways in order to fit one’s ideas within a certain rhyme scheme or line length. But especially in contemporary poetry, I am in good company in preferring to write in free verse."+
                "It turns out a lot of people think they hate poetry...... and I’m pretty sure the reason for this is that what they learn about poetry in middle and high school is, at least in the context of contemporary poetics, largely wrong, or at least a very limited conception of what poetry is. They are taught about Shakespearean sonnets and haiku. They are forced to memorize the definitions of words like anaphora and metaphor, which can certainly be building blocks of good poetry but are absolutely not the essence of what poetry is. In fact, I’ll go so far as to say that most middle and high school teachers completely miss the point when it comes to poetry, presenting poems as puzzles to be decoded and prizing logical meaning over what I believe to be the true purpose of poetry, which is to affect an emotional experience. And that experience won’t even be the same for each reader!"+
                "I read a poem the same way I listen to music: letting the words and sounds wash over me, paying more attention to my emotional and sensory experiences than any coherent narrative (although that can absolutely also come into play). Oftentimes it’s extremely difficult to put words to this experience, though as a poet – a conveyor of feeling – I may be better equipped than most to do so.",
        subjects: "English and Creative Writing",
        topics: ["Writing", "Personal"],
        url: "public/views/blog/in-defense-of-poetry.html",
        popular: false
      }, {
        id: 'what-my-path-to-stuyvesant-taught-me',
        img: "https://s3.amazonaws.com/goorooblogimages/victoria.jpg",
        shareImg: "https://s3.amazonaws.com/goorooblogimages/victorias-post.jpg",
        title: "What My Path to Stuyvesant Taught Me",
        encTitle: "What%20My%20Path%20to%20Stuyvesant%20Taught%20Me",
        date: "July 19, 2017",
        author: "Victoria H.",
        preview: "Stuyvesant was always my dream school as a middle schooler. Everyone talked about it — my relatives, my teachers, my friends, and especially, my mom. My mom pushed me to do my best",
        content: "Stuyvesant was always my dream school as a middle schooler. Everyone talked about it — my relatives, my teachers, my friends, and especially, my mom. My mom pushed me to do my best, and more importantly, she had faith in me. However, I knew getting into Stuyvesant wasn’t going to be easy. I knew that I had to study hard, do as many practice tests as I could, go to multiple tutors for help, and attend a myriad of prep courses." +
                  "I remember my mom forcing me to wake up at 7 am on weekends so I would get to my SHSAT tutor on time. I remember going to prep school in the summer, while all my other friends were playing around. I used to complain about having endless work and never being able to rest. I had doubts about even getting into Stuyvesant, because of how prestigious it was. I knew that I wasn't the smartest person in my class and even if I did get into Stuyvesant, I was scared that I wouldn't fit in." +
                  "Every time I would complain, my mother would remind me of what I was working towards. She would always say that my goal was to get into Stuyvesant first. I worked even more intensely and consequently, my confidence rose." +
                  "When I got to the room where I was going to take the SHSAT, I remember my hands shaking and my heart beating rapidly.  As I started bubbling the answers to the first few questions, I was struck by the realization that all of the time I'd spent studying for the exam was paying off.  I recalled all the special tips and techniques that countless people have told me over the years in order to help me stay calm and become more confident in my answers. When I finished, I was no longer feeling anxious and instead, I was confident that I was going to attend my dream school." +
                  "When I found out that I got into Stuyvesant, it was one of the happiest moments of my life. It showed that all my time studying for the exam wasn’t a waste and that I had the ability to achieve any goal I had. I am now a senior at Stuyvesant High School, and looking back, I can’t believe that when I was only twelve years old, I was already reading the complex passages and solving the tricky math and logic problems that were on the SHSAT. In fact, I am proud of myself for putting all I had into that test, but I didn’t do it alone." +
                  "My mom and tutors motivated me to try hard and to not give up. Their guidance inspired me to become an intern at Gooroo because I know how important tutoring was in my path to Stuyvesant and I want to share those same opportunities with as many other students as possible."+
                  "standardized test prep advice, standardized test prep tips, NYC specialized high schools, SHSAT tips, SHSAT advice",
        topics: ["SHSAT", "Personal", "Studying"],
        url: "public/views/blog/what-my-path-to-stuyvesant-taught-me.html",
        popular: true
      }, {
        id: 'act-sat-writing-tips',
        img: "https://s3.amazonaws.com/goorooprofileimages/0458E716-1BC2-4930-A67F-F0EE06C9DCE5-8825-0000090DC4D3A3D8.png",
        title: "ACT/SAT Writing Tips",
        encTitle: "ACT&#47;SAT%20Writing%20Tips",
        date: "July 12, 2017",
        author: "Alice L.",
        authorLink: "https://www.gooroo.com/tutor/AliceL/wvtwQtueXkrvhnZT0EZLvz91pwWo3Z4VxNU4/",
        preview: "Here is a quick tip to boost your ACT/SAT writing section scores or just grammar skills in general! Grammar comes intuitively to English speakers, but knowing the logic behind each question can help correct those costly mistakes. This short video",
        content: "Here is a quick tip to boost your ACT/SAT writing section scores or just grammar skills in general! Grammar comes intuitively to English speakers, but knowing the logic behind each question can help correct those costly mistakes. This short video explains a common question type on those standardized tests, on misplaced modifiers."+
                "SAT advice, SAT tips, SAT Writing advice, SAT Writing tips, ACT advice, ACT tips, ACT Writing advice, ACT Writing tips, grammar advice, grammar tips",
        subjects: "the SAT and ACT",
        topics: ["SAT/ACT", "Writing", "Advice", "Studying"],
        url: "public/views/blog/act-sat-writing-tips.html",
        popular: false
      }, {
        id: 'how-personalities-affect-learning',
        img: "https://s3.amazonaws.com/goorooprofileimages/DACABA5C-C4EB-433F-8511-3E7C1E1CC7C0-5000-0000062102409C85.png",
        shareImg: "https://s3.amazonaws.com/goorooblogimages/personalities.jpg",
        title: "How Personalities Affect Learning",
        encTitle: "How%20Personalities%20Affect%20Learning",
        date: "July 12, 2017",
        author: "Yuna S.",
        authorLink: "https://gooroo.com/tutor/YunaS/0ZZ7iJtVyoShonnOwMDqh70MSuThfUoJyu40/",
        preview: "It is vital to understand what kind of a person you are before deeming a certain subject impossible to learn, because there are always alternative learning methods that can effectively suit your unique personality",
        content: "“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”"+
                "This visionary and arguably debatable quote was stated by none other than the widely proclaimed quintessential genius, Albert Einstein. Having developed the groundbreaking theory of relativity, Einstein has been universally recognized as one of the world’s greatest physicists and thinkers, despite the fact that he grew up as an average student and even failed his university entrance exam."+
                "The important message to take away from Einstein’s story is not that one special Average Joe had an astounding secret gift and struck scientific gold, but that every individual personality is different and is not always validated and rewarded by standardized educational systems."+
                "To elaborate, some students, like Einstein, may be very imaginative, curious, and ambitious, but are not necessarily organized or motivated to stay focused on certain subjects, especially those that do not seem particularly interesting or call for an entirely different way of thinking in order to get an A. Others may be very organized, hard-working, and logical, but struggle with thinking creatively and understanding larger, indeterminate concepts or theories. Some students love to think out loud and collaborate with others but struggle with concentrating on reading, while others prefer to work independently and love to read but struggle with expressing their ideas in a group setting."+
                "It is vital to understand what kind of a person you are before deeming a certain subject impossible to learn, because there are always alternative learning methods that can effectively suit your unique personality."+
                "Every tutor needs to understand that one specific teaching method will not work for every student, and every student needs to understand that just because one specific subject might be immensely challenging, it is not impossible nor is it a testament to failure or incompetence. Tutoring is a mutually functioning pursuit, which substantiates the significance of productive communication."+
                "When it comes to learning, nothing is off limits and it is important to recognize that keeping an open mind towards new and sometimes unconventional learning methods can be surprisingly worthwhile for those who find themselves really struggling with a subject. For example, if you have a nasty habit of procrastinating, try dividing lengthy assignments into shorter ones, setting attainable and less intimidating goals for yourself, minimizing your dread to start them. Or if you find yourself often having trouble paying attention in a class and getting lost in your thoughts, don’t be afraid to tell your tutor that it would benefit you to have clear, descriptive study guides to help you understand any material you might have missed."+
                "As for tutors, if you know your student struggles with understanding large conceptual ideas in his calculus class but does well in memorization-heavy courses such as history or chemistry, spend more time on providing specific practice problems and examples and making flashcards together than trying to explain a convoluted theory. Or if you can sense that your student is especially cautious, polite, and hesitant to ask questions, try your best to be encouraging rather than giving harsh yet constructive criticism."+
                "Effective tutoring is effective communication, and the best way to effectively communicate is to understand one another and bring out your mutual strengths to efficiently achieve a common goal. You may not be Albert Einstein, but if you apply your strengths to what may seem like a weakness, you might just be surprised at what you’re truly capable of."+
                "studying advice, studying tips, tutoring advice, tutoring tips",
        subjects: "the SAT and College Application Writing",
        topics: ["Studying", "Tutoring", "Advice", "Personal"],
        url: "public/views/blog/how-personalities-affect-learning.html",
        popular: false
      }, {
        id: 'my-teaching-experience-as-a-gooroo-tutor',
        img: "https://s3.amazonaws.com/goorooprofileimages/94CCE1AD-5B9A-4A73-8333-B8426AA460E3-690-0000008F9315FBE2.png",
        shareImg: "https://s3.amazonaws.com/goorooprofileimages/94CCE1AD-5B9A-4A73-8333-B8426AA460E3-690-0000008F9315FBE2.png",
        title: "My Teaching Experience as a Gooroo Tutor",
        encTitle: "My%20Teaching%20Experience%20as%20a%20Gooroo%20Tutor",
        date: "June 23, 2017",
        author: "Amelia S.",
        authorLink: "https://www.gooroo.com/tutor/AmeliaS/BdYr0dFzdhgBVzATcXyAYTxqbDB14sLEJFJn/",
        preview: "When I first started teaching, I never thought I was going to be where I am today or how much I enjoy helping others improving their Spanish. My humble career started many years ago, in 2010, in the city of Granada in the south of Spain",
        content: "When I first started teaching, I never thought I was going to be where I am today or how much I enjoy helping others improving their Spanish."+
                  "My humble career started many years ago, in 2010, in the city of Granada in the south of Spain. At that time, I was in my last year of university (Post Graduate in Teaching Spanish as a Second Language). Then, I had the opportunity to work as a Spanish teacher for the first time. These days, I often ask myself with a gasp “How long has it been since me, a shy Amelia gave her first lesson!”"+
                  "Now, teaching is my addiction! To share my knowledge, help other people reach their goals, be able to make them overcome their challenges ... these bring me the biggest satisfaction. "+
                  "I landed in this city in March 2016 and I was completely lost. I wanted to continue my passion but the whole way of doing things in NYC was something unknown to me. Luckily, by chance one morning, I randomly found Gooroo, and it instantly caught my attention. I remember one line on their website saying “You’re welcome to come to visit our office,” so I did. I was surprised with the warmth of the welcomed. Instantly I felt like I was part of the group having never met any of these people. Among others, I met Scott and Hermany, who are the most delightful people, and they patiently explained to me how everything worked. They explained to me where they came from, how the project first started, the philosophy behind Gooroo and its staff… Not before too long, I became a tutor with Gooroo, and started working with many excellent students, from teenagers to college students to professionals. Nowadays and thanks to Gooroo, I’m teaching a group of Seniors in Brooklyn who show me every day that no matter what age they are, the care and the love for learning a new language can break any walls and for that, I’m impressed and grateful every day. "+
                  "Being a teacher or a tutor is not only a matter of providing tips or vocabulary to a bunch of students. Being a teacher is to connect with the ones you're helping and make them visualize their goal of commanding new language, a new culture and giving them a new tool to conquer their world."+
                  "“To have another language is to possess a second soul”  -Charlemagne",
        subjects: "Spanish",
        topics: ["Languages", "Tutoring", "Personal"],
        url: "public/views/blog/my-teaching-experience-as-a-gooroo-tutor.html",
        popular: false
      }, {
        id: 'why-i-tutor',
        img: "https://s3.amazonaws.com/goorooprofileimages/5263119E-D0B0-4E4D-99C5-1263AE54E21A-339-00000010ABE998C1.png",
        shareImg: "https://s3.amazonaws.com/goorooblogimages/rohans-post.jpg",
        title: "Why I Tutor",
        encTitle: "Why%20I%20Tutor",
        date: "June 15, 2017",
        author: "Rohan R.",
        authorLink: "https://www.gooroo.com/tutor/RohanR/VKXfBW4gtbm2FfEzwWVgq0oruyaR2wxhIam9/",
        preview: "You might always wonder how we got here. Often students and parents ask how I have managed to spend over half my life as a tutor. Even before it was a job, tutoring as a volunteer took up most of my free time",
        content: "You might always wonder how we got here. Often students and parents ask how I have managed to spend over half my life as a tutor. Even before it was a job, tutoring as a volunteer took up most of my free time. Ultimately, I started to realize how easily I could keep up to date with science and the arts just by teaching others."+
                  "Working everyday to capture that &quot;Ah-hah!&quot; moment keeps the mind active and promotes new learning. It is easy for me to remember clients who reached his level of success - even one of my best friends used my tutoring services in pharmacy school. He had always seen me eager to help others, but had never bothered to admit how much guidance he personally needed. The most challenging student is the one uncomfortable with the prospect of facing an unsolvable problem. These students are usually very intelligent and have grasped most of what they learned in school almost immediately. But everyone needs that extra push."+
                  "My friend was no different, as suddenly calculus seemed to stump him right before his midterms. Sometimes students (even the smart ones) aren't taught the proper meaning of a derivative, and even those who have used calculus for years (such as myself) can benefit from a refresher. By starting from scratch, I was able to reeducate him on the fundamentals of calculus, which it turns out was all he needed to master the rest of the class and pass his exams without worry. He was grateful for the favorable end result, but I was even more grateful for witnessing the moment when he finally added calculus to his skill-set. It was something no one could ever take away from him."+
                  "When students learn of my tutoring experience, they then start to ask how far I will take them. Am I there just to solve one problem, help with one assignment, and then disappear? Never. Ideally, every person I teach should one day feel confident enough from my lessons to become a tutor themselves. If you are a student seeking tutoring, you clearly have the desire and passion to constantly learn more about the world around you through other people. Why not take that passion and share it with others? That is perhaps the greatest lesson I have managed to teach - that learning thrives when it spreads freely.",
        subjects: "High School Science and Math",
        topics: ["Tutoring", "Personal"],
        url: "public/views/blog/why-i-tutor.html",
        popular: false
      }, {
        id: 'planning-out-your-sats',
        img: "https://s3.amazonaws.com/goorooprofileimages/857556AC-D782-4AE4-A1DF-FC603236F674-7039-0000052D4D2A2B56.png",
        shareImg: "https://s3.amazonaws.com/goorooprofileimages/857556AC-D782-4AE4-A1DF-FC603236F674-7039-0000052D4D2A2B56.png",
        title: "Planning Out Your SATs",
        encTitle: "Planning%20Out%20Your%20SATs",
        date: "June 7, 2017",
        author: "Sue L.",
        authorLink: "https://www.gooroo.com/tutor/SueL/G18QrGTGIMAM2QHo6KeYeKZYPChsMZXxGQv0/",
        preview: "Even though the school year is winding down, the arrival of summer break doesn't always translate to fun and games. You guessed it; it's time for SAT prep. It may seem daunting and overwhelming",
        content: "Even though the school year is winding down, the arrival of summer break doesn't always translate to fun and games. You guessed it; it's time for SAT prep. It may seem daunting and overwhelming, but here's a plan to make that sinking feeling in your stomach go away."+
                "Have an idea of WHEN you will be taking them: Ideally, you'd love to only take them once. However, you should have a back-up plan. It's suggested to not exceed taking 3 graded SAT exams. Using this information, set a goal for yourself on which dates you will take your exams. Plan and study accordingly."+
                "Catch up on your vocabulary: &quot;Huh? What does that word mean again?&quot; Update flashcards or use an app to learn a new word every day. Eventually, you will have increased your vocabulary by 200 words!"+
                "Take weekly practice exams in the RIGHT setting: Don't have the TV on. Don't have your phone nearby. Don't be on your bed. When you take practice tests, pretend like you are actually in the exam room. Test settings tend to make people nervous; so, mimicking the environment as closely as possible will prepare you for the real thing."+
                "Check Collegeboard: Sign up for an account on Collegeboard. Since you have already planned out which tests you have in mind, register for your SAT exams early! Don't sign up late and be forced to drive an hour away to take your exam!"+
                "Stay prepared, and plan for your SATs the smart way! SAT tips, SAT advice, studying for the SAT",
        subjects: "SAT and College Application Writing",
        topics: ["SAT/ACT", "Advice", "Studying"],
        url: "public/views/blog/planning-out-your-sats.html",
        popular: false
      }, {
        id: '3-memorization-techniques-to-ace-your-final-exam',
        img: "https://s3.amazonaws.com/goorooprofileimages/36F898BD-79DB-4CB0-8AAA-D1485422958C-1187-00000039FA45480C.png",
        shareImg: "https://s3.amazonaws.com/goorooblogimages/peters-post.jpeg",
        title: "3 Memorization Techniques to Ace Your Final Exam",
        encTitle: "3%20Memorization%20Techniques%20to%20Ace%20Your%20Final%20Exam",
        date: "June 7, 2017",
        author: "Peter M.",
        authorLink: "https://www.gooroo.com/tutor/PeterM/Dl8K27gzAGjrNDFEsNKBSsDk1j7MrLjtb88Z/",
        preview: "We have all had those assignments where you have to memorize a seemingly inconceivable amount of material. Whether it be a vocabulary list or a poem, these three tips will help you succeed",
        content: "We have all had those assignments where you have to memorize a seemingly inconceivable amount of material. Whether it be a vocabulary list or a poem, these three tips will help you succeed. "+
                  "Make Index Cards Index cards have long been considered the staple memorization strategy. Personally, they are my favorite and make memorizing long lists easy. Write the word on one side, and then the definition or translation of that word on the other side. I love to use index cards to test or quiz myself to make sure I know all the material. If you don’t physically have index cards, or would like to use your computer, use a site like Quizlet. Quizlet is great because you can share your virtual index cards with anyone you want!"+
                  "Write it Down and Repeat Another classic memorization strategy is repeatedly writing down what you have to memorize. This strategy is particularly effective if you have to memorize a poem or block of writing. Simply take out some paper and write down what you have to memorize a few times. Besides helping me learn the material, I use this strategy to make sure I have memorized everything exactly. To do this, I try to write down what I memorized by memory. I then compare with the original source to make sure I have everything correct."+
                  "Create Acronyms Another one of my favorite memorization strategies is creating acronyms. This technique works great for a list in a specific order. An example of an acronym that students use often is PEMDAS which gives the correct order of mathematical operations (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction). This acronym is easy to remember and makes a list, that would normally be hard to memorize, easy to memorize. "+
                  "Use these three tips to make memorization easy! studying tips, studying advice, SAT tips, SAT advice, ACT tips, ACT advice, studying for finals",
        subjects: "the SAT and ACT",
        topics: ["Advice", "Studying", "SAT/ACT", "SHSAT"],
        url: "public/views/blog/3-memorization-techniques-to-ace-your-final-exam.html",
        popular: false
      }, {
        id: 'how-to-teach-students-to-understand',
        img: "https://s3.amazonaws.com/goorooprofileimages/A3117B34-3223-4548-9206-F2598BCFBB69-2116-0000022146ED48D2.png",
        shareImg: "https://s3.amazonaws.com/goorooprofileimages/A3117B34-3223-4548-9206-F2598BCFBB69-2116-0000022146ED48D2.png",
        title: "How to Teach Students to Understand",
        encTitle: "How%20to%20Teach%20Students%20to%20Understand",
        date: "June 7, 2017",
        author: "Spencer G.",
        authorLink: "https://www.gooroo.com/tutor/SpencerG/0zVl8V3fuPV0iJBf7eJLFSw3lCMe8I0o8ROA/",
        preview: "Helping students overcome challenges is part of the rewarding experience that makes tutors love their jobs in the first place, but this can be a trap. Students may think they simply want answers, but what they are actually looking for is strategies",
        content: "It is easy as a tutor to want to tell students the right answer to a problem they are facing. Helping students overcome challenges is part of the rewarding experience that makes tutors love their jobs in the first place, but this can be a trap. Students may think they simply want answers, but what they are actually looking for is strategies and understanding."+
                  "As the old adage goes, give a man a fish and he eats for a day, teach a man to fish and he eats for a lifetime."+
                  "Teaching students to think critically on their own is a complex process. Simply showing the student how you did the problem is not enough. Engagement is key. Ask students questions that will guide them to discovering the answer on their own. for example if you wanted a student to add 2+2 as a step in their calculus problem, don't tell them to do so. Instead ask them &quot;What might we combine here that would help us?&quot;"+
                  "This process may take a little bit longer, but it is well worth it because you are teaching the student to think in a way that is more effective, not just teaching them what to think.",
        subjects: "the SAT and Hunter High School entrance exam prep",
        topics: ["Tutoring", "Advice"],
        url: "public/views/blog/how-to-teach-students-to-understand.html",
        popular: false
      }, {
        id: '3-tips-for-the-day-of-a-standardized-test',
        img: "https://s3.amazonaws.com/goorooprofileimages/A3117B34-3223-4548-9206-F2598BCFBB69-2116-0000022146ED48D2.png",
        shareImg: "https://s3.amazonaws.com/goorooprofileimages/A3117B34-3223-4548-9206-F2598BCFBB69-2116-0000022146ED48D2.png",
        title: "3 Tips for the Day of a Standardized Test",
        encTitle: "3%20Tips%20for%20the%20Day%20of%20a%20Standardized%20Test",
        date: 'June 7, 2017',
        author: "Spencer G.",
        authorLink: "https://www.gooroo.com/tutor/SpencerG/0zVl8V3fuPV0iJBf7eJLFSw3lCMe8I0o8ROA/",
        preview: "You have prepped for countless hours. Studied many pages and hopefully learned a lot. Now test day comes. There are a few tips and tricks that can give you that extra bit of confidence and focus you need to ace it",
        content: "You have prepped for countless hours. Studied many pages and hopefully learned a lot. Now test day comes. There are a few tips and tricks that can give you that extra bit of confidence and focus you need to ace it."+
                  "Eat a good breakfast Most standardized tests happen early in the morning, but that is no excuse to skip breakfast. Even if you don't normally eat a breakfast, this is the day you want to break that rule. Tests are long and they are both mentally and physically exhausting, you need energy and the best way to get that is food. Bananas are a superfood and they are my go to for test day. Avoid heavy foods like steaks that will sit in your stomach and take lots of energy digesting. Treat test day like a sporting event."+
                  "Warm up your mind & body Many of you know that hazy feeling when you wake up and the world comes into focus. That effect actually lingers as it takes your body and mind a long time to wake up. Jumpstart this process physically by doing some light walking and stretching before the test. Similarly, jumpstart this process mentally by reading a short bit of the newspaper of even a page of your favorite book. The test itself should not be the first words you read that day. Do not overstimulate yourself, however, so stay away from books or news stories that are too mentally engaging."+
                  "Bring an excessive number of pencilsMany people bring only 2 pencils and one eraser to a standardized test. I always advise my students to bring at least 4 sharpened pencils and 4 mechanical pencils (full of lead). An extra pencil will cost at most $1 and is one of the best investments you can make in preparing for a test. It may not come up, you may only use one of those 8 pencils. But, wasting time sharpening your pencil is a silly reason to loose time on your test. Additionally, if you have 8 pencils then you won't be concerned about breaking one. It is better to be over-prepared than underprepared."+
                  "SAT advice, SAT tips, ACT advice, ACT tips, standardized test advice, how to study",
        subjects: "the SAT and Hunter High School entrance exam prep",
        topics: ["Advice", "SAT/ACT", "SHSAT", "Studying"],
        url: "public/views/blog/3-tips-for-the-day-of-a-standardized-test.html",
        popular: false
      }];

      $scope.topics = ["SAT/ACT", "College Application", "SHSAT", "Studying", "Tutoring", "Advice", "Writing", "Languages", "Personal"];
      $scope.showTopics = false;
      $scope.topToggle = function() {
        $scope.showTopics = $scope.showTopics === true ? false : true;
      };

      function findPos(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        return [curtop];
        }
      };

      $scope.topicClicked = false;
      $scope.clickedTopic = "";
      $scope.clickTopic = function(top){
        var topic = top;
        console.log("topic clicked: " + topic);
        $scope.topicClicked = true;
        $scope.clickedTopic = topic;
        window.scroll(0,findPos(document.getElementById("clickedTopicPost"))-85);
      }
      $scope.topicMatch = function(currentpost){
        console.log("topic: " + $scope.clickedTopic);
        var post = currentpost;
        if(post.topics.includes($scope.clickedTopic)){
          console.log("topic match: " + post.title)
          return true;
        }
        else{
          return false;
        }
      };
      $scope.showAllPosts = function(){
        $scope.topicClicked = false;
      }

      $scope.showMore = function(){
          $scope.quantity += 7;
      };

      function popPosts(){
          $scope.popularPosts = []
          for(var post in $scope.posts) {
            if ($scope.posts[post].popular) {
                $scope.popularPosts.push($scope.posts[post]);
            }
          }
      };
      popPosts();

      function init() {
        if($){
          var id = $stateParams.id;
          if(id.length <= 0){
            $scope.currentPost = $scope.main;
            console.log("Main blog page");
          }
          else if(id === "search"){
            $scope.currentPost = $scope.search;
            loadResults();
          }
          else{
            for(var index in $scope.posts) {
              var post = $scope.posts[index];
              if(id === post.id) {
                $scope.currentPost = post;
                break;
              }
              else {
                $scope.currentPost = $scope.main;
              }
            }
          }
        }
      };

      $scope.getPostLink = function(){
        return $state.href('blog', {id: $scope.post.id});
      };
      $scope.getPopPostLink = function(){
        return $state.href('blog', {id: $scope.popularPost.id});
      };

      $scope.onClick = function (post) {
        if(!post.id){
          $scope.currentPost = $scope.main;
          $state.transitionTo($state.current, {id: null}, {
            reload: true, inherit: true, notify: true
          });
        }
        else {
          $scope.currentPost = post;
          window.scrollTo(0,0);
          $state.transitionTo($state.current, {id: post.id}, {
            reload: true, inherit: true, notify: true
          });
        }
        location.reload();
      };

      $scope.sbMenu = false;
      $scope.sbToggle = function() {
        $scope.sbMenu = $scope.sbMenu === true ? false : true;
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=955599334534338";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      function searchGo(query){
        $scope.searchresults = [];
        query = query.toLowerCase();
        $scope.count = 0;
        for(var index in $scope.posts){
          var post = $scope.posts[index];
          var postContent = post.content.toLowerCase();
          var postTitle = post.title.toLowerCase();
          var postAuthor = post.author.toLowerCase();
          if (postContent.includes(query) || postTitle.includes(query) || postAuthor.includes(query)){
            $scope.searchresults.push(post);
            $scope.count += 1;
          }  
        }
        return ($scope.searchresults, $scope.count);
      };

      var url = window.location.href;

      function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

      function loadResults(){
        var query = String(getUrlParameter("q"));
        $scope.query = query;
        searchGo(query);
      }

      init();
  });
}());;
