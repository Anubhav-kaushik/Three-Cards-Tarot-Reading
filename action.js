/* main */
const JSON = [
    {
      "card": "Ace of Wands",
      "past": "You took a bold, creative move in the past that has defined you ever since. Your daring and determination are defining features of your personality.",
      "present": "Inspiring and deeply creative, the Ace of Wands encourages you to take the leap. Now is the time to abandon drudgery and chase your dreams.",
      "future": "A big break is on the horizon for you, and things will fall into place so perfectly you'll feel it could only be fate.",
      "context": "You feel compelled to start something new, but you're waiting for a sign that it's the right time to move forward. Creative energy is building.",
      "focus": "It's time to focus on your creative instincts. Let that energy drive you forward and take a chance on the idea you're considering.",
      "outcome": "Your world will soon rearrange itself into a masterpiece of transformation. This situation will result in a dramatic and wonderfully positive change for you.",
      "situation": "You're experiencing a breakthrough moment in your life, filled with passion, excitement, and opportunities. This is a pivotal situation that will define your future.",
      "obstacle": "Though the situation feels exhilarating right now, keep in mind that you're only at the beginning of your journey. You may stumble if you rush ahead.",
      "advice": "The Ace of Wands calls on you to let your creativity and intuition drive your next moves. Now is the time to take a leap!",
      "image": "Ace of Wands.jpg"
    },
    {
      "card": "2 of Wands",
      "past": "Your independence and self-confidence put you in your current situation, for better or worse. You've relied solely on your own power to get here.",
      "present": "You feel like you're on top of the world right now, enjoying the fruits of your labor. You're in a position of power in your life.",
      "future": "If you continue on this path, your independence may leave you isolated. Beware of a singular focus that may strip you of other opportunities and joys.",
      "context": "You're facing a fork in the road and must make a choice. It's difficult knowing whether to stay or go, as the grass isn't always greener.",
      "focus": "The Two of Wands represents a singular, often hard-headed, focus. Make sure you're not so intent on your goal that you're missing what's around you.",
      "outcome": "The outcome is favorable for your situation, provided that you don't become so single-minded or independent and isolated that you miss the rewards.",
      "situation": "Your situation can go one of two ways, and you've reached a pivotal point where you must choose a path. Be mindful, as this choice matters.",
      "obstacle": "Though you're positioned to achieve your goals, you won't feel content with the outcome. You may feel a sense of emptiness when the race is won.",
      "advice": "Though you're feeling confident and powerful, it's important not to exclude others. Collaboration and partnership are crucial to ensure success in this situation.",
      "image": "2 of Wands.jpg"
    },
    {
      "card": "3 of Wands",
      "past": "You experienced a great hope in the past. This hopeful situation has reemerged, either for fulfillment or to mark a change in your viewpoint.",
      "present": "You're feeling very optimistic about your present situation. The surrounding cards and keen interpretation from a psychic can let you know whether this optimism is warranted.",
      "future": "All will become clear very soon. Look to your close associates, teammates, or family members for deeper insights into how the future will take shape.",
      "context": "Your current situation requires collaboration from three or more people for the resolution you're looking for. You cannot conquer it yourself, though you may want to.",
      "focus": "Prospects for collaboration and negotiation are good right now. Find your ideal group of teammates and focus on moving forward with the project you've been considering.",
      "outcome": "This situation will yield great results if you collaborate successfully with those around you. Negotiations will go smoothly and online or international trade will be particularly successful.",
      "situation": "Your current situation requires keen collaboration with those around you. You need to work as a team to move forward. You cannot handle this challenge alone.",
      "obstacle": "You need to work closely with others to achieve your goals, but that group includes someone you don't like. You must find a way to collaborate with them.",
      "advice": "Seek help from those around you to succeed in this situation. This is a challenge that you cannot overcome alone, but the help you need is close at hand.",
      "image": "3 of Wands.jpg"
    },
    {
      "card": "4 of Wands",
      "past": "You made a wise investment that's played a key role in forming the foundation that you now stand on. It's time to reflect on those contributions.",
      "present": "A gathering that you've been preparing for will yield unexpectedly good fortunes. What seemed like an ordinary get-together may change your life.",
      "future": "Your future holds an unexpected joy and unparalleled harmony beyond anything you could have prepared for. Expect something miraculous to befall you soon.",
      "context": "The situation that you're exploring is deeply intertwined with the family or society around you. It requires harmony among many different people.",
      "focus": "In this situation, you need to expand your focus and consider all the players. This impacts more than just you, and all sides must be considered.",
      "outcome": "The outcome of the situation is outstandingly favorable. You're likely to experience the kind of success or good fortune you've only dreamed of and never thought possible.",
      "situation": "Your current situation is very complex. It involves a great many people, so it's important for you to step back and consider everyone who's being impacted.",
      "obstacle": "Your attitude has been far too introverted for the situation that you're in. You need to involve others more, even if it makes you uncomfortable. ",
      "advice": "Look to those around you for help with your current situation. The outcome is favorable for those who seek support and collaboration openly.",
      "image": "4 of Wands.jpg"
    },
    {
      "card": "5 of Wands",
      "past": "A conflict in the past has resurfaced or is reminiscent of the present situation. Speak with a psychic about what you should do differently or the same.",
      "present": "You're dealing with some strife among those around you. You may experience problems with the envy of others or your own jealousy.",
      "future": "Expect to encounter a conflict with those around you soon. A lingering jealousy may cause problems. A psychic can help find the source of this emotion.",
      "context": "Your current conflict is driven by jealousy, envy, or competition. This can be helpful in sporting competitions but is destructive in most other situations.",
      "focus": "You're feeling outwardly focused on competition with or jealousy of those around you. Step back and decide whether your attention is on the right thing.",
      "outcome": "You're going to have to compete for what you want, whether that's a promotion, home, attention, or sport. Arm yourself to fight your way forward.",
      "situation": "Your current situation is one of fierce competition and challenges. You may struggle with another's envy of you or your own jealousy of others. ",
      "obstacle": "You may feel that you're not worthy of your goals or find yourself trapped in conflict. Clear your mind of doubt and fight your way forward.",
      "advice": "Watch out for distractions like feelings of jealousy, inadequacy, or competitiveness. These will rarely serve you well and must be conquered for you to move forward.",
      "image": "5 of Wands.jpg"
    },
    {
      "card": "6 of Wands",
      "past": "You're looking to relive the glory days of the past, and you have spent a lot of time recalling your earlier victories and moments of pride.",
      "present": "The seeds that you planted long ago are finally bearing fruit. Though this tree may have taken years to grow, the taste of success is sweet.",
      "future": "A victory is coming. You will soon see results from your labors. Though you may have planted the seeds long ago, they will soon bear fruit.",
      "context": "Your current situation is one of emerging success. You're finally seeing your endeavors bear fruit and realizing exactly what types of seeds you've planted.",
      "focus": "It's time to focus on the satisfaction and joy of your accomplishments. Take care not to get arrogant, even if you're experiencing a bit of fame.",
      "outcome": "You've spent a long time tilling the ground and sowing seeds. It's finally time to see the fruits of your labor and enjoy the sweet taste of success.",
      "situation": "You're reaping the rewards of everything that you've sown in the past. Expect recognition for your efforts and perhaps newfound popularity, notoriety, or fame.",
      "obstacle": "Though you've been successful, pride and arrogance may trip you up. Alternately, you may find someone else's arrogance has robbed you of credit you deserve.",
      "advice": "Don't let your influence or fame go to your head. Remain humble and thankful, and don't forget those who helped you achieve your goals.",
      "image": "6 of Wands.jpg"
    },
    {
      "card": "7 of Wands",
      "past": "You worked hard and overcame many challenges to become the person that you are today. Your tenacity and strength are part of your core foundation.",
      "present": "Though it hasn't been easy, you've been doing the right thing in standing your ground and remaining firm in the face of your opposition.",
      "future": "Your current activities may put you in a position where you have to continually defend yourself in the future. Reconsider the way you're approaching things.",
      "context": "You're facing conflict and staunch arguments from someone close to you. It's important to hold your ground in this context. You will likely remain on top.",
      "focus": "Focus on staying strong even in the face of your current adversity. Though you may be tempted to give in, this card calls you to remain steadfast.",
      "outcome": "Conflicts that have been simmering will soon reach a boil. Prepare for a battle. Your opponents may fight dirty, but you should stay strong.",
      "situation": "You're currently facing a major conflict with someone close to you. Though the fight is exhausting, it's important not to give in right now.",
      "obstacle": "A disagreement with someone close to you will make your situation particularly challenging. Resist the temptation to bend. You need to remain firm in this.",
      "advice": "Maintain your position, no matter how fierce the battle seems around you. You have the right of things and will come out on top if you stay firm.",
      "image": "7 of Wands.jpg"
    },
    {
      "card": "8 of Wands",
      "past": "The universe presented you with outstanding opportunities in the past. Whether you maximized or squandered them, you're reaping what you've sowed with those.",
      "present": "Things are finally going your way, and you're being presented with a golden opportunity. Though it may feel too good to be true, you've earned this.",
      "future": "The future is rosy and will soon turn in your favor. Speak with a psychic about how to channel your positive energy toward these matters.",
      "context": "You're being presented with an opportunity, and the time is ripe to say yes. Accept that job, blind date, or new project. Good things are coming.",
      "focus": "Take advantage of the opportunities that are before you. Now is the time for rapid forward movement. Hold on tight \u2014 this will be a whirlwind!",
      "outcome": "The outcome is extremely favorable for this situation. Incredible opportunities lie before you. Take hold and they may change the course of your life.",
      "situation": "You're currently in a whirlwind of good fortune. It seems like everything is going your way. Let this sink in and enjoy the ride \u2014 you've earned it.",
      "obstacle": "Things have been changing so quickly that you're starting to feel overwhelmed. Your good fortune is staggering, and you need to find your balance.",
      "advice": "Say yes! The universe is presenting you with a wealth of opportunities and now is the moment to accept them. A psychic can offer valuable guidance.",
      "image": "8 of Wands.jpg"
    },
    {
      "card": "9 of Wands",
      "past": "You're carrying a great deal of emotional baggage from the past. You may feel unworthy or incapable of moving forward from some of these sticky mires.",
      "present": "You're currently in a place of turmoil. The setbacks seem to be coming from all directions. It's difficult to maintain a positive outlook, but a psychic may help.",
      "future": "You will soon have to deal with a major conflict. This could be a fallout with someone close to you, or a setback in your career.",
      "context": "There is a great deal of conflict right now, and you're feeling worn down by the challenges and setbacks. Patience is crucial in this situation.",
      "focus": "Focus on protecting and preparing yourself for trouble. Turbulent times are coming, and it's important to keep your guard up and move carefully.",
      "outcome": "The outcome of this situation is very turbulent. You will not encounter smooth sailing, but you can make it through with persistence and strength.",
      "situation": "Your current situation is fraught with difficulties. You may feel like it's just one thing after another. A psychic may help you navigate these waters.",
      "obstacle": "You're running into a lot of setbacks, delays, and challenges. Though your plans may still come to fruition, you have a long road ahead of you.",
      "advice": "Prepare yourself for the coming storm. Batten down the hatches, check your emergency stores, and put thoughtful safeguards in place both figuratively and literally.",
      "image": "9 of Wands.jpg"
    },
    {
      "card": "10 of Wands",
      "past": "You dealt with an overwhelming number of responsibilities in the past. This may have robbed you of your childhood or stifled your creativity.",
      "present": "Though your ideas are grand, you're currently in over your head. You need to secure more knowledge or resources to succeed in this venture.",
      "future": "You have a lot of work ahead of you. If you stay on your current path, you must prepare to put in significant time and effort.",
      "context": "Your current situation is fraught with challenges, making it easy to feel overwhelmed. Speaking with a psychic may help you untangle everything that you're facing.",
      "focus": "Focus on assessing the challenges ahead of you carefully. It may be that these are a warning to take a different route or abandon this project.",
      "outcome": "If you stay on your current path, you will face many challenges ahead. It's important to assess whether this is the right route, or you should turn away.",
      "situation": "You're feeling overwhelmed by the challenges and obstacles in your path. You have a difficult road ahead if you choose to stay the course here.",
      "obstacle": "You're under a great deal of stress and may want to simply give up. Instead of turning back completely, you may want to try a different route.",
      "advice": "Speak with a psychic about finding the right path forward. Some affirmation of your current route can help you weather the challenges that are ahead.",
      "image": "10 of Wands.jpg"
    },
    {
      "card": "Page of Wands",
      "past": "The attitude or demeanor that you held in your childhood is resurfacing. This may come as a burst of creativity and exuberance or a period of carelessness.",
      "present": "You're poised to take on a new project or explore a different path in life. You're getting a fresh start and have a wealth of opportunities.",
      "future": "Your current challenges will soon fade away, making room for a bright future full of creativity and potential. The sky's the limit for you.",
      "context": "You're facing an abundance of opportunities. Let your creativity flow and don't turn down any idea as \u201cimpossible.\u201d The sky's the limit right now. ",
      "focus": "Focus on removing blockages and letting your creativity flow. Pursue what excites you and allow yourself to explore the idea that anything is possible.",
      "outcome": "You can make your dreams a reality if you're willing to put in the work. You have grand visions, but you will need determination to realize them.",
      "situation": "You're filled with ideas and excitement right now. Your creative juices are flowing freely, and you have grand visions for the potential that's before you.",
      "obstacle": "Though you have great enthusiasm for your current project, you may struggle to see things through. You'll find it easier to start than finish.",
      "advice": "Beware of the slump of fading enthusiasm. It's easy to find excitement at the beginning of a project, but it takes persistence to finish it.",
      "image": "Page of Wands.jpg"
    },
    {
      "card": "Knight of Wands",
      "past": "A hasty decision from your past led to lasting repercussions. Either you're coming to regret your rashness, or you've realized that it taught you something important.",
      "present": "You're experiencing a powerful flood of inspiration, bordering on obsession. You're ready to flout tradition and make a dramatic move that may shock those around you.",
      "future": "A burst of inspiration is coming, and you may get swept up in the whirlwind. It will be easy to lose yourself in this all-consuming creativity.",
      "context": "You're extremely excited about this situation and may find yourself swept away by your enthusiasm. You're tempted to take rash action, though it may be ill advised",
      "focus": "Your focus is currently on the novelty and creativity of your current situation. You're not seeing the logistics clearly and may leap in too soon.",
      "outcome": "Things will happen very quickly in this situation. Though this could mean rapid accomplishments, it may also cause you to miss some details along the way.",
      "situation": "Your current situation is so exciting you can't help but jump in. Things are moving at a rapid pace, but you're thrilled with the direction.",
      "obstacle": "You're trying to do too much, too fast. Though you're enthusiastic about your prospects, this frenzied action may lead to errors or unfinished details.",
      "advice": "The time is ripe for change, and things are happening very quickly. Make sure you don't miss key details in your haste to move forward.",
      "image": "Knight of Wands.jpg"
    },
    {
      "card": "Queen of Wands",
      "past": "You have a nurturing, optimistic foundation that goes back to your childhood. Your roots are sunk deep in these positive experiences and memories.",
      "present": "You're in a peaceful and positive place in your life right now. You're perfectly positioned to survey your accomplishments and assess the future from here.",
      "future": "Your future is bright. Doubts or fears that have plagued you will soon disperse, and you will enjoy a wonderful period of peace and self-confidence.",
      "context": "You have a lot going on, but an optimistic and outgoing attitude will help you succeed on all fronts. Keep your energy levels high for this adventure.",
      "focus": "Focus on maintaining a positive attitude through your current situation. Energy, optimism, and a powerful stance are crucial to success here.",
      "outcome": "Someone will soon come into your life who will help you achieve your goals or improve your relationships. This will likely be a kind, guiding woman.",
      "situation": "Your life may feel a bit chaotic, but the energy is all excitement and sensuality. Maintain a positive energy and you can manifest all your desires.",
      "obstacle": "A domineering woman will enter the situation and create complications for you. Be wary of giving over your power and speak with a psychic about how to proceed.",
      "advice": "Knowing what you want will take you far. The Queen of Wands calls for assertiveness, optimism, and an outgoing approach to charm all those around you.",
      "image": "Queen of Wands.jpg"
    },
    {
      "card": "King of Wands",
      "past": "You've achieved many great things in the past, particularly within your hobbies and personal interests. These accomplishments have laid the foundation for your present situation.",
      "present": "You're consumed by passion for your current pursuits. You likely hold a position of power and authority, and others look to you for your expertise.",
      "future": "You will become very accomplished in your hobbies and interests. You may be offered a position of authority in a field that greatly interests you.",
      "context": "You're at the top of your game right now and sit in a position of authority over the current situation. Don't let your power go to your head.",
      "focus": "You're very focused on accomplishments and achievements right now. While this will bring you personal success, make sure you don't neglect those around you.",
      "outcome": "You will take center stage in this situation and enjoy a positive outcome. Don't forget those around you as you enjoy the fruits of your success.",
      "situation": "You're in peak shape right now to tackle the situation at hand. You sit in a prime position of authority here and should move forward with confidence.",
      "obstacle": "Your confidence and authority can be a weakness as much as a strength. Make sure you're not over-confident or demeaning to those around you.",
      "advice": "Move forward confidently, but not arrogantly. You're in a position to be of great use to those around you if you expand your focus to consider them.",
      "image": "King of Wands.jpg"
    },
    {
      "card": "Ace of Pentacles",
      "past": "Your past revolved around material possessions. You may have been particularly lucky with your acquisitions, and this has had an impact on your present situation.",
      "present": "The land is fertile for planting right now, but the seeds you sow are up to you. You're in the place of new beginnings. Choose wisely.",
      "future": "The Ace of Pentacles typically represents new beginnings. When it represents the future in a reading, it usually indicates stagnation. Things will not progress.",
      "context": "You're facing a new beginning. The time is ripe to make plans for your future, as you're in the formative stages of all that's to come.",
      "focus": "It's time to focus on new growth. If you feel that you haven't been moving forward, you're in the wrong job or with the wrong partner.",
      "outcome": "You need to position yourself for a fresh start. The Ace of Cards is about letting go of what isn't working and embracing change.",
      "situation": "You're in the very first stages of a new adventure. You may soon meet your future spouse or get the job that will become your career.",
      "obstacle": "You will have a false start in this situation. Things may look rosy and full of promise, but they're not what they seem. Assess carefully.",
      "advice": "The time is ripe to embrace new opportunities and fresh starts. You may also have a favorable outcome with the lottery, as luck is on your side.",
      "image": "Ace of Pentacles.jpg"
    },
    {
      "card": "2 of Pentacles",
      "past": "Balance is a very important theme from your past. Either you've learned to achieve great balance, or you've suffered serious repercussions from imbalanced priorities.",
      "present": "You're performing a delicate dance of balance right now. If you manage your time, finances, and priorities properly, you will succeed in your current endeavors.",
      "future": "You will soon be called upon to address imbalances in your life. You must carefully balance your time, finances, relationships, family, and other obligations.",
      "context": "You're dealing with an imbalance in your life that needs correcting. It's important to give your attention to all areas, including money, family, work, and pleasure.",
      "focus": "You need to focus on carefully balancing all aspects of this situation. Consult a psychic if you're unsure where the disparity is currently happening.",
      "outcome": "You will have to carefully assess all your needs, wants, and responsibilities in this situation. You must find an equitable balance to move forward.",
      "situation": "Your current situation is notably imbalanced. Something is taking too much of your time and other areas of your life are suffering for it.",
      "obstacle": "You must overcome the challenge of balancing the different aspects of your life, giving adequate attention to work, family, self, money, pleasure, and other pursuits.",
      "advice": "Carefully assess where your time, money, and attention are going. Make sure everything is in balance and your bank account is healthy before moving forward.",
      "image": "2 of Pentacles.jpg"
    },
    {
      "card": "3 of Pentacles",
      "past": "You had the opportunity to hone important skills in your youth. The education that you gained in your earlier days will serve you well.",
      "present": "Your unique skill set will prove extremely valuable to the situation at hand. Though you may do most of the work, you will have to share the credit.",
      "future": "You will need to learn a new skill in the future. Expect a period of intense learning or apprenticeship in the coming months or years.",
      "context": "You have unique skills that will serve you well in your current situation. You have an opportunity to put your talents to use.",
      "focus": "You're approaching a period of intense focus on honing your skills and learning new things. You will need to put in a lot of work.",
      "outcome": "Your current situation will teach you important skills and help you achieve a level of great expertise in areas of interest to you.",
      "situation": "You're being presented with some valuable learning opportunities. Take advantage of them and you may achieve a great level of expertise in these skills.",
      "obstacle": "You need to put in a great deal of effort to gain the necessary skills to move forward. You may struggle with the hard work.",
      "advice": "Consider carefully whether your current project is worth the time and effort that it will take. You may be better off finding a different route.",
      "image": "3 of Pentacles.jpg"
    },
    {
      "card": "4 of Pentacles",
      "past": "You put in a great deal of hard work that led to financial gains. You're loath to let go of these and are holding tight to the past.",
      "present": "You're feeling very protective and possessive of your financial wealth right now. It's difficult for you to release your grip on all you've earned.",
      "future": "You've been taking an overly cautious approach to life and may need to reexamine this approach going forward. There's no reward without risk.",
      "context": "You're worked very hard on this current situation, and it's been paying off. However, you're feeling very protective of what you've earned, and are holding it tightly.",
      "focus": "Your current focus is on hoarding and defending your wealth and belongings. You feel very protective of what you have, but you may need to loosen your grip.",
      "outcome": "Though you've acquired much, you won't find the satisfaction that you seek until you learn to loosen your grip on it and share the wealth.",
      "situation": "Your hard work is finally paying off, and you're seeing significant rewards from your efforts. You're tempted to hoard this wealth and may hold on too tight.",
      "obstacle": "You feel very protective of your possessions and money, and this is creating feelings of friction and discontent. You need to loosen your grip.",
      "advice": "You've achieved great success, and now is the time to enjoy what you've earned. Don't hold on to it too tightly. It's best to share the wealth.",
      "image": "4 of Pentacles.jpg"
    },
    {
      "card": "5 of Pentacles",
      "past": "You suffered a great loss in the past. Reflecting on how you overcame this challenge may give you insights into how you can best handle your current situation. ",
      "present": "There's a great opportunity before you, but you're looking right past it. Are you staying with the wrong partner or job while the right one is there waiting?",
      "future": "There are great challenges in your future, but you shouldn't lose faith in the greatness and abundance of the universe. Persevere through what's to come.",
      "context": "Your current situation may seem bleak, but there is a way through. Don't let fear or insecurity drive your actions. Speak to a psychic for greater clarity.",
      "focus": "You're focusing on the cause of your problems and not the answer. Don't waste time assigning blame. Take responsibility and find your own way forward.",
      "outcome": "You must take personal responsibility for this situation so you can control the outcome. Release anxiety, possessiveness, and fear so you can move on.",
      "situation": "You're facing a serious challenge right now, but you also have control over the outcome. Let go of anxiety and fear so you can move forward.",
      "obstacle": "You might be your own biggest obstacle right now. Check in with a psychic and see how your fear, possessiveness, or anxiety are holding you back.",
      "advice": "You need to open your eyes to the potential resources around you and stop placing blame for your difficulties. You have the power to move on.",
      "image": "5 of Pentacles.jpg"
    },
    {
      "card": "6 of Pentacles",
      "past": "You had to deal with someone who was preoccupied with money and wealth in the past. This experience shaped the way you perceive finances today. ",
      "present": "You're in a place of prosperity and need to examine your approach to success. Are you sharing the wealth appropriately with those around you?",
      "future": "You'll soon get what you're wishing for, but it's possible that you'll realize it's not all you'd hoped. Are you setting your sights on the right target?",
      "context": "You're experiencing a time of great prosperity and must consider how to use it. Spreading the wealth and giving to others will serve you well.",
      "focus": "You need to focus on balance right now. You're in a time of abundance. How can you give of your wealth, talents, or time to others?",
      "outcome": "Be mindful of how you're using your abundant resources. Give freely and it will be given back to you. Possessiveness can lead to ruin.",
      "situation": "You finally have all that you've been working for. Now you must decide how to use this abundance and who you will share it with.",
      "obstacle": "You're experiencing a wonderful time of harvest, but if you hoard all that you're reaping, you may find yourself in a dissatisfying place.",
      "advice": "Seek balance in all that you're given. Give of your time, wisdom, wealth, and other resources to help others and you'll reap rewards as well.",
      "image": "6 of Pentacles.jpg"
    },
    {
      "card": "7 of Pentacles",
      "past": "Your past actions have created the situation that you're in today. For better or worse, you know that you're the one responsible for this set of circumstances. ",
      "present": "Your current investments are beginning to pan out, and you're seeing results from your efforts. Now you must choose what to do with them.",
      "future": "Financial success and prosperity are in your future, but you'll have to work for them. If you put in good effort, you'll reap the rewards.",
      "context": "Your current focus will help you identify long-term investments that will yield great dividends. You'll have to work hard, but the payoff will be great.",
      "focus": "You need to play the long game and focus on long-term investments. You won't see a quick outcome in this situation, but you can gain sustainable results.",
      "outcome": "Your efforts will pay off in the long-term. Invest your time, talents, and finances wisely and you'll find that you're well-prepared for a prosperous future.",
      "situation": "Your current situation is all about planning for the future. You'll have to work hard now, but you're going to get results that last.",
      "obstacle": "Don't get distracted by a desire for quick wins. You'll need to put in a lot of work and wait for the long-term results.",
      "advice": "Cultivate a long-term vision for your future. Consult a psychic for help mapping out the most prosperous future and deciding what to work on to get there.",
      "image": "7 of Pentacles.jpg"
    },
    {
      "card": "8 of Pentacles",
      "past": "You've built your life on a foundation of diligence, determination, and hard work. Your dedication and unfailing effort are defining factors of who you are now. ",
      "present": "You've been working hard to move forward in life. Though it may feel like you'll never reach the finish line, rest assured that you're making progress.",
      "future": "The future is bright, but it will take a lot of hard work and some major changes in your life to get what you're after.",
      "context": "You can see a lot of hard work ahead but rest assured that it's all worth it. You're poised for a new beginning that will yield grand results.",
      "focus": "You need to remain laser focused on the project in front of you. Don't get distracted or discouraged. The results are worth all the effort.",
      "outcome": "Your current path will lead to success if you're diligent and work hard. Put in the time and effort, and you will see great results.",
      "situation": "You're poised for a new beginning that will lead to great rewards. However, there's a lot to do and learn along the way to your goals.",
      "obstacle": "Your current project requires concentration and patience. You must remain dedicated and avoid the temptation to slack off or cut corners along the way.",
      "advice": "Diligence will serve you well in this situation. Focus on the work at hand, hone your skills, and press forward with unfailing determination.",
      "image": "8 of Pentacles.jpg"
    },
    {
      "card": "9 of Pentacles",
      "past": "Your material needs were well met in your childhood, but you may have lacked some things that money can't buy, like emotional security or mental stimulation.",
      "present": "You're enjoying the feeling of security and happiness that financial security can bring. Your struggles are behind you now, and you can finally relax.",
      "future": "Your happily ever after is just ahead. All that you've worked for will come to fruition, and you will enjoy a time of great prosperity.",
      "context": "You're in a powerful position in your life where you finally feel confident, fulfilled, and well grounded. You're finally in a place to relax and enjoy life.",
      "focus": "Focus on enjoying the good life and taking advantage of all that you've earned. You put in a lot of hard work to get here.",
      "outcome": "The outcome of this situation is overwhelmingly positive. You will finally get to sit back and enjoy all the rewards that are coming to you.",
      "situation": "You've put in a lot of hard work, and your goal is finally within reach. If you haven't already seized it, you will shortly. Congratulations!",
      "obstacle": "Though you're in a place of great prosperity, it's important to remain tactful, graceful, and generous toward others. Consult a psychic and consider your actions carefully.",
      "advice": "Allow yourself a moment of celebration. You've kept your nose to the grindstone. It's time to lift your head and take in the beauty around you.",
      "image": "9 of Pentacles.jpg"
    },
    {
      "card": "10 of Pentacles",
      "past": "Wealth and social status were very important in your younger days. Your attitudes toward money and prosperity are having a big impact on your current situation.",
      "present": "It's important to consider your attitude toward your finances. Are you too stingy? Too much of a big spender? You may need to adjust.",
      "future": "Business ventures will be profitable, but it's important not to put too much focus on money in your personal life. It will not buy you happiness.",
      "context": "Your financial stability plays a key role in your current situation. Consult with a psychic to find the best way to proceed, as this is an important moment.",
      "focus": "You're in a very stable place in your life right now. Focus on sinking your roots deep and enjoying this prosperity and security.",
      "outcome": "You have clear skies and sunny days ahead. Things are looking up in nearly all areas, and you can relax as you look toward a stable future.",
      "situation": "You're in a very safe and stable situation right now. Don't worry \u2014 it's not too good to be true. You've earned this moment and should enjoy it.",
      "obstacle": "Don't let short-term setbacks rock your sense of security in the long-term future. Small waves can't rock your ship. You have too much going in your favor.",
      "advice": "Sit back and enjoy the rewards that you've worked so hard to earn. Look peacefully toward the future and know that it's safe and prosperous.",
      "image": "10 of Pentacles.jpg"
    },
    {
      "card": "Page of Pentacles",
      "past": "You have a strong and solid foundation beneath you and understand how the world works. You've developed strong instincts that you can now safely trust.",
      "present": "You're learning how things work and have developed a keen sense of understanding about the world around you. You can trust your own judgment.",
      "future": "You may enjoy a whimsical suspension of disbelief right now, but reality will soon become impossible to ignore. Brace yourself for impact as the truth crashes in.",
      "context": "It's time to start putting plans in place to move you toward your goals. Speak with a psychic to make sure you're focused on the right target.",
      "focus": "Focus on planning for the future right now. Great opportunities lay ahead, and it's important to lay a strong foundation so you can take advantage of them.",
      "outcome": "You will realize your goals in the future, but it's important to maintain your enthusiasm and put in the necessary effort now.",
      "situation": "You're in a major planning phase right now with fresh new opportunities before you. Sign up for the class, go to the party, and do the thing!",
      "obstacle": "Try to maintain the proper sense of realism as you plan for your future. You still need to keep your feet on the ground.",
      "advice": "You have new skills to master before you can reach your goals. Start planning how you can gather all the necessary knowledge for the next steps.",
      "image": "Page of Pentacles.jpg"
    },
    {
      "card": "Knight of Pentacles",
      "past": "You had a safe, stable upbringing that gave you a solid foundation for things to come. Your past has prepared you well for future challenges.",
      "present": "You're in a comfortable place in your life where all your primary needs are met. However, this place of extreme comfort may lead to boredom.",
      "future": "Though you may be struggling right now, your \u201cknight in shining\u201d armor will soon arrive to deliver the financial stability that you're seeking.",
      "context": "You're in a very comfortable place in your life right now, but it's lacking somewhat in excitement. You are on track to meet your goals, though.",
      "focus": "Stay on the current path and focus on stable, consistent progress. Though it can feel mundane, slow and steady is the way to go.",
      "outcome": "You will achieve a place of great contentment and stability. Your dedication and hard work will pan out and provide for all your needs.",
      "situation": "You have everything that you really need right now, but you're in danger of taking it for granted. It's important to appreciate what you have.",
      "obstacle": "Boredom and monotony may cause your eyes to wander from your current path. This is dangerous, as you're on the right track to reach your goals.",
      "advice": "Keep moving forward and stick to the plan that you've established. Though it can feel monotonous, this is the best path to achieve your goals.",
      "image": "Knight of Pentacles.jpg"
    },
    {
      "card": "Queen of Pentacles",
      "past": "You were well provided for in the past by someone you loved. This could be a parent, romantic partner, or even yourself. You have a stable foundation.",
      "present": "The Queen of Pentacles represents care. Either someone is taking care of you or you're providing attentive, loving care to someone else in your life.",
      "future": "Your future is bright, and you will find a way to meet all your needs. You are wise and resourceful, and this will serve you well.",
      "context": "You're in a comfortable situation where all your needs are met. However, you must maintain a realistic view of the work it takes to maintain this.",
      "focus": "Make sure you're properly balancing all areas of your life. The Queen of Pentacles demands equal attention for family, work, love, and self so you have it all.",
      "outcome": "Your resourcefulness will help you find everything that you need to maintain a comfortable lifestyle for yourself and your family. Stability and prosperity are coming your way.",
      "situation": "Your current situation is one of comfort and stability. You have all that you need, and you can share your wealth with others.",
      "obstacle": "Consider how you're using your finances and make sure you're neither too conservative nor too flamboyant with your purchases. A psychic can help you assess.",
      "advice": "Make sure you're keeping your feet on the ground. Your current position of comfort could lead to overindulgences if you're not mindful.",
      "image": "Queen of Pentacles.jpg"
    },
    {
      "card": "King of Pentacles",
      "past": "You have a strong, grounded foundation. In the past, you were well cared for and didn't have to worry excessively about material things.",
      "present": "Your material needs are all well satisfied and you're now in a position where you can consider more spiritual matters and your impact on the universe.",
      "future": "Your needs will all be taken care of. You will either find impressive means on your own or you will encounter a generous benefactor.",
      "context": "You're enjoying a place of abundance right now. It's important to use this time to consider how you can benefit others or further your spiritual goals.",
      "focus": "Focus on taking a thoughtful and methodical approach to your future. Though you're enjoying a period of prosperity, you should invest rather than squander it.",
      "outcome": "You are approaching a period of great prosperity and calm. All of your needs will be provided for and you'll have the means to help others.",
      "situation": "Your hard work has paid off and delivered you to a place of peace and prosperity. Consider how you can benefit others with the abundance that you have.",
      "obstacle": "Don't allow yourself to focus too much on the materialistic aspect of things. Though you have abundant resources, your wealth shouldn't define you.",
      "advice": "Look for ways to share your wealth. Use it to care for your friends and family or support meaningful organizations that align with your core values.",
      "image": "King of Pentacles.jpg"
    },
    {
      "card": "Ace of Cups",
      "past": "There is a lover of great importance in your past. This deep, meaningful relationship is impacting the way you perceive your current situation.",
      "present": "A new romance is in the cards for you. It's likely that \u201cthe one\u201d is near. If you're in a relationship, things are progressing beautifully.",
      "future": "Finding love is one of your top goals. Consult with a psychic to determine if this is the best focus for you right now.",
      "context": "Your current situation is deeply emotional. You have the beautiful opportunity to experience deep and unconditional love if you're ready and willing to accept it.",
      "focus": "Love and passion are your primary focuses right now. This can lead to a dramatic blossoming of creativity if you let it bubble forth from your heart.",
      "outcome": "You will find a great, lasting love. This could be a romantic love, deep loving friendship, or even a love of a new hobby.",
      "situation": "You're in a place of new beginnings, particularly in the romantic realm. Expect to meet someone important or take your relationship to the next level.",
      "obstacle": "Though you have great passion in your future, it may not lead to great prosperity. Your creative endeavors probably won't yield a major financial gain.",
      "advice": "Enjoy your love and passion to the fullest, but don't let it control you. It's important to stay in control of your emotions when you're flying high.",
      "image": "Ace of Cups.jpg"
    },
    {
      "card": "2 of Cups",
      "past": "You had a deep, meaningful relationship in your past that's formed the foundation for your present. Though it may have ended, it taught important lessons.",
      "present": "An important relationship is forming. This could be romantic, familial, or business-related. You may need to let go of old hurts to move forward.",
      "future": "Your budding relationship will bloom into something beautiful. This will be a very meaningful partnership in your life, though it's undetermined whether it's \u201cthe one.\u201d",
      "context": "A meaningful relationship is taking root in your life. You've just met someone who will become an important partner, either romantically or as a best friend.",
      "focus": "Focus on nurturing and caring for the new relationship in your life. This person has much to share with you, but you must treat them right.",
      "outcome": "Your relationship will blossom and yield wonderful things in your life. This could be a romantic relationship or an important friendship with many valuable lessons.",
      "situation": "A new relationship is at the center of your life right now. This could be a romantic pairing, business partnership, or exciting new friendship.",
      "obstacle": "Though you're in a good relationship, it's possible that you're sticking around out of habit. Speak with a psychic about whether it's time to move on.",
      "advice": "Don't take your current relationship or friendships for granted. Make sure you're actively nurturing your relationships and seeking ways to grow alongside those you love.",
      "image": "2 of Cups.jpg"
    },
    {
      "card": "3 of Cups",
      "past": "You had strong, nurturing friendships in your past that formed the foundation for who you are today. These relationships were a core part of your childhood.",
      "present": "You're surrounded by people who care deeply for you. You have many secure relationships in your life that are serving you well.",
      "future": "New family members are in your future. This could be the result of marriage, pregnancy, or adoption. You could also find a new roommate.",
      "context": "You are surrounded by strong, supportive relationships with friends and family. Spending time with and relying upon these people will serve you well right now.",
      "focus": "Focus on spending plenty of time with those in your social circle right now. Your friends can give you the support, advice, and care that you need.",
      "outcome": "You will soon enjoy a respite from the stressors that you've been facing. It's time to unwind with friends and take time for fun.",
      "situation": "You've found a great circle of friends and you're enjoying a particularly social season right now. It's time to let yourself unwind and have fun.",
      "obstacle": "Though you're enjoying a much-deserved period of rest and relaxation, it's important not to become too careless. You run the risk of overlooking things that are important.",
      "advice": "Allow yourself a break from the many stressors that you've been giving your attention to. Listen to your friends and take the time for fun.",
      "image": "3 of Cups.jpg"
    },
    {
      "card": "4 of Cups",
      "past": "There's a troubling moment in your past that you're struggling to accept. This could be a missed opportunity, lost love, or poor choice. It's time to move on.",
      "present": "You're ignoring a valuable opportunity or gift that's being offered to you. Clinging to the past robs you of the opportunity to enjoy the present.",
      "future": "You're learning what opportunities to accept and what to turn down. Your future is much brighter for learning the skill of saying no.",
      "context": "You're rejecting key opportunities in this current situation. Carefully consider whether this is the right choice and think about consulting a psychic in the process.",
      "focus": "You're focusing too much on yourself when you need to step back and consider those around you. You're surrounded by opportunities that will soon expire.",
      "outcome": "You need to get out of your current mire of discontent and self-centeredness to move forward. Consult a psychic for a serious reevaluation of your life.",
      "situation": "You're displaying extreme apathy in your current situation which may cost you valuable opportunities in the future. It's time to wake up and look around.",
      "obstacle": "Your lack of motivation is keeping you from moving forward. You need to meditate on where you want to go and get yourself moving.",
      "advice": "Wake up! You're stuck in a period of self-centered discontent even though there are opportunities for success all around you. It's time to look up.",
      "image": "4 of Cups.jpg"
    },
    {
      "card": "5 of Cups",
      "past": "You experienced a great trauma in the past that's keeping you from moving forward. This could be a painful childhood or difficult break-up.",
      "present": "You're facing a difficult situation such as a divorce, death of a loved one, or loss of a job. You will need fortitude and optimism to move forward.",
      "future": "A very difficult situation is ahead, but you have the opportunity to prepare yourself. Evaluate your life closely and get ready for a time of turmoil.",
      "context": "You're distracted by your past and haven't moved forward yet from the turmoil you faced. It's time for forgiveness and letting go.",
      "focus": "Your current focus is one of deep pessimism, but this won't help you move forward. It feels like things will never get better, but this isn't true.",
      "outcome": "The outcome seems gloomy right now, but you have the power to change it. Take a \u201cglass half full\u201d look at your life and change your focus.",
      "situation": "You're stuck in a loop of negative thinking that's holding you hostage in a place of discontent. You must work to free yourself from this cycle.",
      "obstacle": "Your pessimism is a major obstacle to forward movement. It's time to forgive and forget. You must move on from your past hurts.",
      "advice": "Let go of the pain, disappointment, and suffering of your past. Holding on to your resentments is only spoiling the opportunities in the present.",
      "image": "5 of Cups.jpg"
    },
    {
      "card": "6 of Cups",
      "past": "You often maintain a sense of childlike wonder and innocence. In the recent past, this allowed you to be taken advantage of or hurt.",
      "present": "You're very trusting and genuine. Your lack of cynicism may allow you to enjoy things to the fullest, but it may also leave you open to deception.",
      "future": "You have a period of peace and relaxation ahead. This may come in the form of a vacation or a special date night that lets you unwind.",
      "context": "You've been looking back over the \u201cgood old days\u201d quite a bit lately. Make sure you're not so focused on the past that you're missing the present.",
      "focus": "You're feeling a pull back to simpler times. Perhaps you're called to a high school reunion or family trip back home.",
      "outcome": "If you can reconcile the desires of your inner child with the realities of your adult situation, you will find a new level of peace and happiness.",
      "situation": "You find yourself in a period of reflection where you'll be called back to prior memories and the lure of a simpler time.",
      "obstacle": "While it's often pleasant to look back on the past, you shouldn't get stuck there. If you have unresolved issues, it's time to make peace and move on.",
      "advice": "Take some time to work with your inner child. What qualities of your earlier self would you like to revive and which do you need to let go of?",
      "image": "6 of Cups.jpg"
    },
    {
      "card": "7 of Cups",
      "past": "You allowed yourself a life centered on the pursuit of pleasure, but this didn't set you up for the success you want. Your carelessness caused your current situation.",
      "present": "Temporary pleasures are distracting you from the proper course. Be careful, as a moment of thoughtless fun can cost you much in the future.",
      "future": "You can see the many pleasures that await if you stay your current course. Working hard now will lead to great rewards in the future.",
      "context": "You can see a future of great beauty ahead of you, but it's not without its challenges. Feed your inner dreamer but prepare for hard work.",
      "focus": "You're having trouble focusing on one opportunity because they all look so appealing. Consult with a psychic to help you choose a direction and move forward.",
      "outcome": "You will find several different opportunities before you, each with their own benefits and drawbacks. Consult a psychic and choose carefully moving forward.",
      "situation": "You have several options before you and you're having a difficult time choosing the right path. Speaking with a psychic may help you chart your course.",
      "obstacle": "You're tempted by temporary pleasures. Though these easy opportunities may feel good in the moment, they will lead to trouble in the long run.",
      "advice": "Carefully consider the pros and cons of all the opportunities that are before you. Avoid the temptation to choose momentary pleasures over long-term investments.",
      "image": "7 of Cups.jpg"
    },
    {
      "card": "8 of Cups",
      "past": "You dealt with some of the trials of your childhood through escapism. You must examine the roots of this tactic to eliminate it from your life today.",
      "present": "Your current situation feels stagnant, stuck, and perhaps even hopeless. The 8 of Cups encourages you to shake things up, make that change, and move on.",
      "future": "Your current path will lead to feelings of stagnation and frustration if you don't make a change. Consider making some major adjustments to avoid this future.",
      "context": "You're struggling with feelings of discontent. Your current situation isn't providing the rewards that you'd expected. Consider what you need to change going forward.",
      "focus": "Focus on determining what is and isn't working for you right now. You're feeling discontent because you've been holding on to something that isn't serving you.",
      "outcome": "It's time to let go of what isn't serving you. If you let go of that luggage, you'll find you're ready for a new spiritual journey.",
      "situation": "You have a nagging feeling that something is holding you back. Heed those feelings of frustration and figure out what isn't serving you anymore.",
      "obstacle": "You're holding onto something that no longer serves you. It's time to move on from the relationship, job, activity, or home that's no longer right.",
      "advice": "Consult a psychic to determine what's holding you back and how to let it go so you can reach the next part of your journey.",
      "image": "8 of Cups.jpg"
    },
    {
      "card": "9 of Cups",
      "past": "This card calls you to reflect on a time in the past when you got everything you wanted, but it was not what it seemed.",
      "present": "You're enjoying a time of deep joy and fulfillment. Your wishes have been granted and you have the opportunity to sit back and enjoy.",
      "future": "The outlook for your future is extremely good. The universe is poised to deliver all that you're wishing for in love, family, and career.",
      "context": "You're experiencing a period of great abundance and blessings. It's time to practice deep gratitude for all that you've been given.",
      "focus": "You're on the path to success. Now is the time to make big moves with confidence. Focus on taking the leap and fulfilling your dreams.",
      "outcome": "The outcome is extremely favorable in this situation. You will receive everything that you're hoping for. Just make sure you're wishing for the right things.",
      "situation": "The present situation is one of deep fulfillment and joy. You're finally going to enjoy the success and rewards that you've been hoping for.",
      "obstacle": "The universe is poised to grant whatever you ask for. It's important to make sure that you're pursuing the right things.",
      "advice": "Make mindfulness and gratitude part of your daily routine. The universe is poised to fulfill all your desires, and it's important to give thanks.",
      "image": "9 of Cups.jpg"
    },
    {
      "card": "10 of Cups",
      "past": "You experienced great happiness and fulfillment in your earlier years. This gave you a strong foundation of faith and positivity that still serves you today.",
      "present": "You're experiencing a significant emotional breakthrough leading to deep fulfillment. This could be falling in love, starting a family, or solidifying an important friendship.",
      "future": "A period of deep emotional contentment is in your future. Though you may have experienced rough waters, smooth sailing and great fulfillment is ahead.",
      "context": "You're creating a life that's in alignment with your core values and beliefs. Following this path will deliver deep emotional fulfillment and security.",
      "focus": "You're experiencing a time of great abundance. It's important to focus on sharing the pleasure with all those you love and showering them with affection.",
      "outcome": "Your relationships are headed in a very positive direction. You will experience great emotional fulfillment and see your connections deepen and grow.",
      "situation": "Your current situation is one of contentment and fulfillment in your relationships. It's important to appreciate this moment of peace and harmony.",
      "obstacle": "As the universe showers you with abundant love and peace, it's important to carry this forward to those around you. Let your light shine brightly.",
      "advice": "The moment is ripe to examine your spiritual beliefs and make sure your relationships align with these values. Peace, joy, and love are abundantly available.",
      "image": "10 of Cups.jpg"
    },
    {
      "card": "Page of Cups",
      "past": "You have a healthy emotional foundation and learned how to handle your feelings early in life. Recalling these foundational memories may serve you well right now.",
      "present": "Love and affection are abundant right now, but it's important to keep your emotions under control. Don't let infatuation rule your actions.",
      "future": "A new passion is in your future. This could be a romantic infatuation or passion for a new hobby or project. Beautiful opportunities are coming.",
      "context": "Inspiration is abundant for new artistic ventures right now. Pay attention, as the universe is showering you with signs and synchronicities to point the way.",
      "focus": "The time is ripe for deep meditation. The universe is trying to communicate with you, and your subconscious can deliver the information that you need.",
      "outcome": "You will find yourself poised for a new creative endeavor. Open yourself up to opportunities and inspiration, and the universe has an abundance to deliver.",
      "situation": "You're in a creative mood, and the universe is more than happy to oblige. Keep your eyes open for sweet synchronicities and fresh inspiration.",
      "obstacle": "Your inner child is begging to come out and play. Make sure your spirit of innocence and carefree optimism doesn't get in the way of your obligations.",
      "advice": "Open your heart and mind to the abundance of inspiration that's around you. The universe is calling you to take on a new artistic venture.",
      "image": "Page of Cups.jpg"
    },
    {
      "card": "Knight of Cups",
      "past": "A significant emotional challenge laid the foundation for your current situation. This could be a past lover who's influencing your current view of relationships.",
      "present": "Pay attention to the leading of your heart. Your passions are calling you forward toward a thrilling new adventure that will change your life.",
      "future": "A new lover or deep passion is in your future. Prepare for the universe to sweep you off your feet as you fall in love with something new.",
      "context": "You're at the precipice of a new creative venture. The time is ripe to take action and move forward toward fresh new horizons.",
      "focus": "The universe is inviting you into a new emotional adventure. Keep your eyes open for exciting opportunities, as the messenger is at hand.",
      "outcome": "Your emotions are running high. If you're not careful, it's likely that you'll make your decisions based on your feelings rather than your thoughts.",
      "situation": "You're facing an important decision that's very emotionally driven. Following your heart will lead you to a wonderfully creative adventure. You'll see where imagination can take you.",
      "obstacle": "Your emotions are the ruling force right now. While this can deliver great creative inspiration, it's important to balance your feelings with reality.",
      "advice": "Follow your heart and listen to the leading of your emotions. Though you should balance your feelings with reason, they're pointing in the right direction right now.",
      "image": "Knight of Cups.jpg"
    },
    {
      "card": "Queen of Cups",
      "past": "Your past was one of great support, love, and understanding. This gave you a strong foundation for an emotionally healthy present.",
      "present": "The current situation is calling you to get in touch with your emotions. Open your heart and you may experience love like you've never known before.",
      "future": "You will have an abundance of emotional support in your future endeavors. You can take risks confidently knowing that the universe has your back.",
      "context": "Empathy is very important right now for you to achieve your goals. This could relate to workplace collaborations, family connections, or romantic relationships.",
      "focus": "Focus on connecting to your emotions and allowing yourself to sense the general atmosphere around you. Empathy will serve you well in your current situation.",
      "outcome": "You're in a phase of creativity and gestation. Allow your deep well of emotions to feed your creative pursuits and you will see success in your endeavors.",
      "situation": "You're in a phase of nurturing and growth. Follow the lead of your empathy and emotions going forward to find the best path forward.",
      "obstacle": "Your sensitivity can be both a strength and a weakness. Make sure your deep emotions are serving you and not overwhelming you.",
      "advice": "Set appropriate boundaries around yourself so you don't get caught up in the emotions of others. It's wonderful to serve, but you must care for yourself, too.",
      "image": "Queen of Cups.jpg"
    },
    {
      "card": "King of Cups",
      "past": "You had a caring, compassionate man in your past who offered important lessons on emotional control. Think back to this wisdom and call on it now.",
      "present": "Your current situation calls for a calming presence that balances diplomacy and logic with compassion and empathy. A wise advisor may arrive to assist.",
      "future": "You will experience great calm in the years ahead. Things will settle into a peaceful and predictable pace where you will enjoy great emotional security.",
      "context": "Your current situation is quite complex and requires both caring consideration and mindful diplomacy. Heed your emotions but don't let them rule you.",
      "focus": "Focus on balancing emotions and reason. You will achieve great success in this situation when you learn to practice compassion without becoming overly sentimental.",
      "outcome": "The outcome is positive with the King of Cups in your cards. He brings emotional intelligence, diplomacy, and control to the situation. Call on these skills.",
      "situation": "You're dealing with an emotionally charged situation. You need to pair diplomacy and level-headedness with empathy and consideration to achieve the outcome that you're looking for.",
      "obstacle": "The overwhelming power of your emotions may feel staggering at times. It's important to control your feelings so you can use them as a tool.",
      "advice": "It's important to balance your intellect and emotions. Listening to your feelings is crucial, but the King of Cups reminds you not to let them rule.",
      "image": "King of Cups.jpg"
    },
    {
      "card": "Ace of Swords",
      "past": "There was an important moment of clarity in your past that forever defined the way you see life. There's a clear delineation of \u201cbefore\u201d and \u201cafter.\u201d",
      "present": "Something is amiss in your life right now, and it's important to define and address it. A psychic reading may help you pinpoint the problem.",
      "future": "Your courage and spiritual strength will deliver you to a place of victory. Though you're facing many current challenges, you are equipped to overcome them.",
      "context": "The situation is ripe for action. You have the necessary insights now to move forward with complete confidence and conviction, which will deliver you great results.",
      "focus": "Keep your sights on truth and justice and pursue these with all your might. You have the knowledge that you need to succeed in your efforts.",
      "outcome": "You will find an important use for your spiritual wisdom and keen reasoning skills. You have the strength to overcome the challenges ahead of you.",
      "situation": "You need to seek justice and truth to overcome the current challenge. Rest assured that you're in the right and you have the wisdom to succeed.",
      "obstacle": "You may need to put up a fight to get the outcome that you deserve from this situation. It's time to push for justice.",
      "advice": "Your critical thinking skills and spiritual wisdom will point you in the right direction, but the path you must follow may present serious challenges.",
      "image": "Ace of Swords.jpg"
    },
    {
      "card": "2 of Swords",
      "past": "Your stubbornness in the past may have halted forward movement or growth that you would have benefited from. It's time to reconsider your approach.",
      "present": "You're ignoring important information right now and avoiding a major decision. You need to face this choice head on to move forward.",
      "future": "You will face a standoff over an important issue, but your current situation is preparing you well. You will have the fortitude and conviction to choose correctly.",
      "context": "You're trying to avoid a difficult decision, but refusing to acknowledge this situation won't make it go away. It's time to make a choice.",
      "focus": "Focus on finding a point of peace in this situation. It's important to call a ceasefire and seek a compromise that all parties can agree on.",
      "outcome": "Though you're facing a difficult decision, it's important to know that an amicable solution lies ahead, even if you have to agree to disagree in the end.",
      "situation": "Your current situation requires you to make an important decision. You're feeling very torn about which way to go, but the answer will reveal itself.",
      "obstacle": "Avoidance and indecision are major obstacles that will halt your forward movement right now. You need to work for a resolution so you can move on.",
      "advice": "Though it looks like there are only two options available right now, there is actually a third that you can pursue. Use your creativity to find it.",
      "image": "2 of Swords.jpg"
    },
    {
      "card": "3 of Swords",
      "past": "A great loss or period of suffering in the past still has you trapped. You haven't finished mourning or moved beyond your guilt and pain.",
      "present": "Deep trouble is stirring. If you're not yet aware of the problem, it's time to do a deep inventory of your life and find it.",
      "future": "Separation, pain, and loneliness are in your future if you stay on your current path. Consider speaking with a psychic to find a different route.",
      "context": "Your current situation is one of suffering and pain. Right now, it's difficult for you to see past the sadness, but you will learn great lessons from it.",
      "focus": "Focus on finding the lesson in your current pain. Though your situation is difficult, there is still growth to be had that will leave you stronger.",
      "outcome": "This situation will culminate in a period of loneliness, separation, or pain. However, you will learn great lessons from this and emerge stronger than before.",
      "situation": "You're suffering from a serious setback or loss. You may feel consumed by your pain, sadness, or loneliness, but remember that this too shall pass.",
      "obstacle": "It's easy to let your pain or disappointment consume you right now, but this won't get you where you need to be. Learn from this loss.",
      "advice": "Though you may be alone and suffering right now, this trial serves an important purpose. You will learn an important lesson and emerge stronger.",
      "image": "3 of Swords.jpg"
    },
    {
      "card": "4 of Swords",
      "past": "Though you faced hardships in your past, you also went through a time of healing that allowed you to make peace with those difficult times.",
      "present": "You're taking a moment to recharge amid your current trials. Though the difficulties will return, this is a quiet time for peace and solitary contemplation.",
      "future": "A time of peace is ahead. Though you feel like you're in the middle of the storm right now, things will calm down soon.",
      "context": "Your current situation is something of a ceasefire. The challenges will resume, but you have a moment now to regroup and plot your next moves.",
      "focus": "Focus on making the time for solitary rest and meditation. This is not the time for action. Rather, you need to carefully consider your options.",
      "outcome": "The flurry of activity that you're currently in will soon die down. Though the quiet will not last, it will give you a chance to rest and recharge.",
      "situation": "The universe has called a ceasefire and is giving you time to recharge. Don't rush into the next decision. Give yourself a quiet moment to rest.",
      "obstacle": "You might feel pressured to make a decision, but you should refrain. Take a moment of respite and resist the urge to move forward.",
      "advice": "Isolate yourself from the outside world as much as possible right now. Meditate, journal, or get a psychic reading. This is the time for reflection.",
      "image": "4 of Swords.jpg"
    },
    {
      "card": "5 of Swords",
      "past": "Your past selfishness has left you in a difficult situation. You may need to seek forgiveness and right your wrongs to get to a place of peace.",
      "present": "Your motives lately have been very selfish. Your greed will not serve you well if you choose to stay on this path. It's time to reconsider.",
      "future": "Your current conflict will come to a head soon. On this path, you're likely to see defeat or at best a hollow victory.",
      "context": "Your desire to win and be \u201cright\u201d has blinded you to the long-term impact of this fight. Speak with a psychic about what's really going on. ",
      "focus": "You're currently focused on winning, but you need to be focused on what's going on around you. Is this fight worth losing your friends over?",
      "outcome": "If you stay on your current path, you will face defeat. Speak with a psychic about finding a different course where you'll be more victorious.",
      "situation": "You're engaged in a difficult conflict where there's no way to really win. Even victorious, you will lose some friends and supporters on this course. ",
      "obstacle": "Beware of arrogance and pride. Is the goal that you're pursuing worth the losses that you'll take to get there? Consider carefully before continuing.",
      "advice": "Don't let your ambition get the best of you. Consider the collateral damage of your current efforts and try to find a less destructive path.",
      "image": "5 of Swords.jpg"
    },
    {
      "card": "6 of Swords",
      "past": "Your past carried some sorrows and losses, but you've moved on and grown from this difficult time. It provided important lessons for spiritual growth.",
      "present": "You're ready for a period of spiritual growth. You can feel the universe pushing you to release all that no longer serves you.",
      "future": "You will experience a time of intense spiritual growth in the future. You will need to release some of your old habits to reach the next stage.",
      "context": "You've found that you need to give up something in order to move forward. It's time to let go and make room for growth.",
      "focus": "Focus on your spiritual growth right now and let go of anything that doesn't serve you. This is a time to shed all that held you back.",
      "outcome": "Though you'll have to let go of old ways, your future is one of great spiritual growth, peace, and wisdom. Let your intuition be your guide.",
      "situation": "You're entering a time of intense spiritual growth. You will have to let go of old ways to fully embrace the next phase of your life.",
      "obstacle": "Holding on to old ways will not serve you right now. It's time to gracefully let go of all that isn't serving your highest self.",
      "advice": "You're on a path of major spiritual growth. Speak with a psychic about what you need to release to embrace your highest self.",
      "image": "6 of Swords.jpg"
    },
    {
      "card": "7 of Swords",
      "past": "You dealt with a major deception in your past, such as an unfaithful lover. This situation is still taking a toll on you.",
      "present": "There's some type of deception at play in your current situation. Either you're misleading someone else or you're the one being misled.",
      "future": "You may need to resort to deception to achieve your current goal. Consult with a psychic to determine if this is really the best path.",
      "context": "You're tempted to be less than truthful in your current situation. This deception is likely to cause harm if you follow through.",
      "focus": "You're more focused on avoiding your problems than on solving them right now. It's important to face this situation if you want a positive resolution.",
      "outcome": "If you give in to the temptations of deception and dishonesty, you will risk losing the affection or someone important to you. Consider another path.",
      "situation": "You're trying to avoid this situation at all costs and have even considered outright deception. You'll pay a high price for your dishonesty if you take this path.",
      "obstacle": "Be careful about who you trust. Placing your confidence in the wrong person can throw massive obstacles into your path in this situation.",
      "advice": "You're tempted to lie your way out of this situation, but you'll pay a price for your dishonesty. Speak with a psychic about finding a better path.",
      "image": "7 of Swords.jpg"
    },
    {
      "card": "8 of Swords",
      "past": "You dealt with a hurtful relationship in the past where your needs and wants weren't considered. Make sure you've broken this cycle.",
      "present": "You're giving in too easily to the desires of others while neglecting what you want. You're likely in a state of denial about this situation.",
      "future": "Your current situation will likely lead to disappointment and stagnation. Consult a psychic on the best way to alter your path forward.",
      "context": "You're feeling pressured to make a decision based on what someone else wants rather than what you want. Consider whether this is really the right choice.",
      "focus": "You're too focused on other people's opinions right now. You need to step back and consider what's really best for you, no matter what others think.",
      "outcome": "If you let others control you, you will never reach your full potential. It's time to break out of the cycle and do something for yourself.",
      "situation": "You're facing a lot of pressure and criticism from others. Don't let this beat you down or stop you from pursuing your dreams.",
      "obstacle": "Your lack of confidence is the biggest obstacle in your life right now. It's time to trust your intuition and become your own best cheerleader.",
      "advice": "Take stock of your desires right now and make sure that you're not serving the wants of others to the detriment of your own happiness.",
      "image": "8 of Swords.jpg"
    },
    {
      "card": "9 of Swords",
      "past": "You're still carrying guilt and tension over something that happened in the past. You need to resolve these feelings before you can truly move forward.",
      "present": "You're under a great deal of stress right now and it's impacting your ability to think clearly. Consulting a psychic may help you gain clearer vision.",
      "future": "A disappointing situation is in the near future, such as a financial loss or loss of an opportunity. However, you will find resolution on the other side.",
      "context": "Your current situation is clouded in fear and anxiety. You're so worried about the outcome that you've lost sight of some of the possibilities.",
      "focus": "Your focus is overwhelmingly negative right now. You need to find a way to escape your pessimism and see the potential that still surrounds you.",
      "outcome": "Your own anxiety is likely going to create a self-fulfilling prophecy and create the thing that you're afraid of. Be mindful of your emotions.",
      "situation": "You're extremely worried about your current situation and have been imagining the worst. Your persistent negative thoughts are your worst enemy right now.",
      "obstacle": "The greatest obstacle in your path right now is your own worry and anxiety about the future. You need to find peace on your path.",
      "advice": "Fear is your worst enemy in this situation. Find confidence in yourself and your path forward so you can overcome the anxiety that's blocking your way.",
      "image": "9 of Swords.jpg"
    },
    {
      "card": "10 of Swords",
      "past": "The worst is behind you. You've been through a terrible ordeal, but you came out on the other side and learned an important lesson from it.",
      "present": "You're turning over a fresh leaf and leaving something very difficult behind. Though times have been hard, you're now getting a fresh start.",
      "future": "You haven't hit rock bottom yet, but you soon will. Don't let this discourage you. From the bottom, you can only rise again, stronger than before.",
      "context": "This situation is fraught with pain, difficulty, and loss. Though things are extremely hard right now, they can only get better, and better days are ahead.",
      "focus": "Keep your focus on what's ahead. You're going through a difficult time, but a spiritual renewal awaits on the other side of this trial.",
      "outcome": "Things will likely get worse before they get better. However, you will rise again from the ashes with a deeper spiritual understanding of life.",
      "situation": "You're dealing with a painful loss. Though things will never be quite the same, you will come out of this with a well of deeper spiritual knowledge.",
      "obstacle": "Pain and sorrow threatens to drown you. If you allow yourself to focus on the negative, you may linger in the darkness longer than you have to.",
      "advice": "Though times have been hard, you need to evaluate the lessons that you've learned from this situation and prepare yourself to rise from the ashes.",
      "image": "10 of Swords.jpg"
    },
    {
      "card": "Page of Swords",
      "past": "There was a time when you had to tell the truth, though it was difficult to do. Your honesty laid the foundation for your current situation.",
      "present": "You're poised to take on a new adventure, but it requires openness and honesty. Hold fast to the truth, even when it's easier to lie.",
      "future": "Expect important news in the future. Someone new is likely to enter the picture with information that will change your view on life.",
      "context": "You're poised to take on a new adventure, but you're aware of your inexperience and lack of knowledge here. Open your mind to learning new things.",
      "focus": "Focus on learning, exploring, and sharing ideas. This is a time for curiosity, as you're getting acquainted with a brand new area of interest.",
      "outcome": "An important new person will enter your life soon. This individual is likely to spark new ideas and change your way of thinking.",
      "situation": "You're poised at the beginning of a new adventure. You have a lot to learn in the days ahead, but this promises to be an exciting time.",
      "obstacle": "You're at the beginning of a new journey and may feel a little lost. Don't let your amateur status stop you from pressing forward in this venture.",
      "advice": "Allow your ideas to flow freely. Communicate them boldly with those around you and open yourself up to new insights and information in this time of growth.",
      "image": "Page of Swords.jpg"
    },
    {
      "card": "Knight of Swords",
      "past": "You learned an important lesson about preparedness in the past. Charging forward without provisions taught you the importance of planning ahead in the future.",
      "present": "You're facing an exciting new venture and you're determined to succeed. However, you will find trouble if you act rashly or don't consider others.",
      "future": "A lack of preparation threatens to thwart your efforts. If you don't slow down and consider your surroundings, this venture may fail.",
      "context": "You're excited to charge ahead on your next adventure. Make sure your partner, colleagues, and other key individuals are ready to keep pace.",
      "focus": "Your enthusiasm may defer your focus and distract you from some of the obstacles ahead. Try to keep a clear view of the landscape so you don't trip.",
      "outcome": "You have a new adventure ahead, but you will need to proceed thoughtfully to avoid the pitfalls of overexcitement. Educate yourself about this venture.",
      "situation": "You're ready to charge ahead with ample confidence and enthusiasm. Your ambition will take you far as long as you have noble goals in mind.",
      "obstacle": "Your lack of preparation is your biggest obstacle right now. In your enthusiasm, you may have charged ahead with considering the consequences that you should prepare for.",
      "advice": "Your enthusiasm is a great strength, but you must temper it with due consideration. Planning for your venture will serve you better than charging ahead thoughtlessly.",
      "image": "Knight of Swords.jpg"
    },
    {
      "card": "Queen of Swords",
      "past": "You made some wise decisions that got you to where you are today. You can now enjoy the rewards of your carefully calculated actions.",
      "present": "You're feeling very opinionated right now, but your insights aren't always welcomed by those around you. It may be best to keep your counsel to yourself.",
      "future": "You will face an important decision in the near future. Your experience and wisdom will serve you well, and you will make the right choice.",
      "context": "You're alone in your current situation and may have recently lost a partner. Though times are difficult, a period of solitude is important to help you adjust.",
      "focus": "You need to show great strength in this situation and focus on standing firm in your beliefs. Don't let others sway you.",
      "outcome": "If you stay your course, you will find yourself alone. Consult a psychic about whether you should soften your heart or stand your ground.",
      "situation": "You may find yourself standing alone right now, but this solitude can become a strength if you approach it correctly. Take this time for yourself.",
      "obstacle": "Feelings of loneliness are creating an obstacle to your happiness right now. Learn to relish your solitude and enjoy the benefits of being independent.",
      "advice": "You need to be direct and clear about your stance on this situation. Though others may criticize you, it's important that you hold your ground.",
      "image": "Queen of Swords.jpg"
    },
    {
      "card": "King of Swords",
      "past": "A person of great reason and intellect influenced your past. This may have been a father figure, teacher, or mentor who taught you a great deal.",
      "present": "A great mentor or teacher has entered your life. You can turn to this person for reliable advice, clear logic, and many important lessons.",
      "future": "You face a difficult decision in the future. It's important to rely on logic and reason to make your choice, ignoring emotions associated with the situation.",
      "context": "Your current situation calls for intellectualism, logic, and reason. Look only to the facts and don't let your emotions or those of others cloud your judgment.",
      "focus": "Focus on gathering the facts to help you make your decision. This situation calls for thoughtfulness, reason, and logic. Abandon any sentimentality around this issue.",
      "outcome": "You will meet a very opinionated and intellectual person who has a strong piece of advice. Consult a psychic on whether this will help or hinder you.",
      "situation": "You're under a lot of pressure to make a decision right now. Don't let your emotions get in the way. This is a time for logic.",
      "obstacle": "Your feelings are your greatest obstacle right now. This is not the time to heed emotions. Logic and reason will serve you far better.",
      "advice": "You need to remain objective in this situation to see the truth of the matter. Use reason, logic, and facts to make your decision.",
      "image": "King of Swords.jpg"
    },
    {
      "card": "The Fool",
      "past": "Your past was a bit haphazard yet fueled by a wild creative energy. This momentum can carry you forward into exciting new endeavors.",
      "present": "You're searching for yourself in a wild and haphazard manner. You don't know where the path will lead you but aren't concerned about mapping a destination.",
      "future": "You're headed to a place of liberation from the bonds of order and obligation. You may find yourself fleeing some of your current obligations.",
      "context": "Your current situation feels a bit haphazard. It's difficult to determine the outcome right now, as there are many inconsistencies that you'll need to contend with.",
      "focus": "You're having trouble focusing on any one thing right now. Your horizons are exploding with limitless possibilities, many of which allow you to redefine yourself.",
      "outcome": "You have a period of wandering and exploration ahead of you. It's nearly impossible to determine the outcome right now, though a psychic may have some insights.",
      "situation": "You're embarking on a wild journey of self-exploration. If you've ever wanted to reinvent yourself, now is the time. Creative energies are running high.",
      "obstacle": "Your inability to focus will make it nearly impossible to pursue a singular goal right now. You're too immersed in the universe's wild creative energy right now.",
      "advice": "Enjoy the liberation from responsibilities and restraints and allow yourself a period of wild exploration. Just don't stay in this phase for too long.",
      "image": "The Fool.jpg"
    },
    {
      "card": "The Magician",
      "past": "You reveled in the belief that anything is possible through your youth. This laid an inspiring foundation, but you will soon need to choose a direction.",
      "present": "You're at the origination point of a new beginning. The universe has given you everything you need to start constructing the future of your dreams.",
      "future": "You will soon need to make a choice about which direction you will go. This is a major decision that will determine the course of your future.",
      "context": "The decision that you're facing right now will determine the course that your life takes. This choice will have a lasting impact on your future.",
      "focus": "Focus on the shape you want your life to take. This is the time to set big goals and lay the foundation for your future.",
      "outcome": "This situation will lead you to a new beginning. You will find yourself with the opportunity to chart a new course and accomplish big things.",
      "situation": "Your situation is ripe with possibilities. Now is the time to set big goals, as the universe has provided everything you need to achieve them.",
      "obstacle": "You have so many possibilities before you that it's difficult to choose just one. Consult a psychic to help you focus your energies on the right path.",
      "advice": "You're poised at the beginning of a new adventure with all the world before you. Choose your path well, as you're setting the course for your whole life.",
      "image": "The Magician.jpg"
    },
    {
      "card": "The Priestess",
      "past": "You applied yourself to your studies in the past and laid a strong foundation of knowledge for your future. Your childhood may have been strict.",
      "present": "Do not accept everything that's presented to you as truth. Your deeper intuition will let you know what you can really trust.",
      "future": "There's a conflict approach that you'd do best to avoid. Tactfully sidestep the situation if you can, and don't yield to the influences of others.",
      "context": "Though you're being presented with one reality, there may be deception at play. The Priestess signifies heightened intuition. Trust what you're feeling and not what you see.",
      "focus": "Focus on your intuition rather than the image that's being presented. You can trust your gut feeling more than what others are telling you.",
      "outcome": "The proper outcome will reveal itself in its own time. This situation calls for patience. You're not meant to know everything right now.",
      "situation": "Your intuition has been nagging at you that something's not quite right. You can trust that gut feeling. Others are likely trying to deceive you.",
      "obstacle": "You're having trouble discerning your desires from your intuition. Though you may want something to be true, it's not always so. Consult a psychic for more insights.",
      "advice": "Spend time in meditation and listen to your inner voice. Your intuition has the right of it if you can quiet your mind to hear. ",
      "image": "The Priestess.jpg"
    },
    {
      "card": "The Empress",
      "past": "The Empress represents deep nurturing. Either you were well-nurtured as a child, or you missed out on this experience and find you're still craving it.",
      "present": "You're well-satisfied right now, but you may find yourself questioning whether your pleasures are just surface diversions. Are you investing in spiritually fulfilling activities?",
      "future": "Something wonderful is gestating for you right now. You will soon find a great opportunity such as a profitable investment, new job, or promising romance.",
      "context": "There is great creative energy available to you right now. All you have to do is seize this power to manifest your goals.",
      "focus": "Focus on pursuing creative growth right now. The Empress can provide the inspiration and energy that you need to make progress toward your goal.",
      "outcome": "The outcome for this situation is positive. You can relax and stop trying to micromanage the details. Everything will be fine.",
      "situation": "Your current situation is bursting with creative energy. There is an abundance of inspiration available if you have the strength to take hold of it.",
      "obstacle": "You may feel the need to micromanage everything around you to get the results you want. Exerting too much control can strangle the project's creative flow.",
      "advice": "Don't worry too much about the details right now. You have great abundance and many positive outcomes waiting for you. Relax and let them flow.",
      "image": "The Empress.jpg"
    },
    {
      "card": "The Emperor",
      "past": "A strong male figure reigned over you in the past. Whether positive or negative, his administration had a major impact that you can still feel today.",
      "present": "It's time to take control of your life and go for what you want. Confidence in your chosen path will help you reach your goals.",
      "future": "A major change is coming that is likely out of your control. You may be asked to follow new rules or conform to what's happening around you.",
      "context": "You have the opportunity to achieve a greater social status or position of authority. Someone of influence may be offering you a hand up.",
      "focus": "Focus on finding the right mentor, guide, role model, or support group. Who you know makes a big difference in your ability to reach your goals.",
      "outcome": "You're on the rise and have access to a powerful person who can give you valuable advice. Enjoy your ride to the top!",
      "situation": "Someone in a position of power sees you favorably. You have the opportunity to increase your social standing or gain a promotion right now.",
      "obstacle": "Don't let your newfound power go to your head or you will lose it. Arrogance and a domineering attitude will not endear you to others.",
      "advice": "You currently have access to some influential people who can help you toward your goals. Make good use of those who are poised to help you.",
      "image": "The Emperor.jpg"
    },
    {
      "card": "The Pope",
      "past": "Your past was ruled by a deeply rooted belief system and many family or cultural traditions. Your childhood gave you a strong sense of identity. ",
      "present": "You are currently forming a new set of habits or beliefs. The actions that you take now will directly influence how your identity takes shape.",
      "future": "Someone of great wisdom, such as a spiritual guide, will come into your life and give you a greater understanding of your place in the world.",
      "context": "The current situation calls for a return to traditional values and ways. This is the time to rely on long-standing traditions and not wild ideas or innovations.",
      "focus": "Meditate on the spiritual beliefs, family traditions, and cultural traditions that have shaped your life. Returning to these values may help in your current situation.",
      "outcome": "A return to the old ways can ignite a fresh passion and sense of excitement in your life. Old traditions will give birth to new opportunities.",
      "situation": "Your life may feel a bit chaotic and wayward right now. Returning to old traditions or mindfully implementing daily habits will help restore order. ",
      "obstacle": "You may be struggling to reconcile your childhood belief system with the way you see the world now. Consult a psychic to find peace and alignment.",
      "advice": "A return to traditional practices and beliefs may help you reconnect with your roots in a powerful way, creating a foundation for future growth.",
      "image": "The Pope.jpg"
    },
    {
      "card": "The Lovers",
      "past": "Your identity is heavily influenced by a loving relationship from your past. This could be your parents if you\u2019re young but is most likely a past lover.",
      "present": "If you\u2019re not already in a romantic relationship, you will be soon. The outlook is passionate and powerful for this transformative partnership.",
      "future": "A significant romance is in your future. Use the present to clarify what you want in a partner so you can attract the right kind of love.",
      "context": "It\u2019s time to evaluate what you\u2019re doing with your life. Are your pursuits in line with your passions or are you stagnating in uninspiring routines?",
      "focus": "Focus on identifying the things that you\u2019re passionate about. This isn\u2019t always a relationship. The lovers can call you to pursue anything you love.",
      "outcome": "Pursuing your passions will get you closer to your goals. Let go of habits that are holding you back and make sure your life lights you up.",
      "situation": "Passion plays an important role in your life right now. If you\u2019re not currently enjoying something you deeply love, it\u2019s time to start.",
      "obstacle": "Ambiguity may be standing in the way of joy and success. It\u2019s time to reconnect with your passions and ignite the fire within.",
      "advice": "The Lovers encourage you to pursue things you\u2019re passionate about. This could mean giving your partner more attention or devoting extra time to a hobby.",
      "image": "The Lovers.jpg"
    },
    {
      "card": "The Chariot",
      "past": "A past triumph played such a big role in your life that it continues to define you. Does this accomplishment still reflect who you are?",
      "present": "You\u2019re enjoying a moment of triumph, but you may also be questioning whether this reward is really what you wanted. Reality and expectations might not match.",
      "future": "The goal that you\u2019re pursuing is completely attainable, and you will soon see progress. Move forward with confidence. You\u2019re on the path to success.",
      "context": "You\u2019re determined to succeed in your current venture. In this particular situation, your strength and dedication will serve you well. Success is close at hand.",
      "focus": "Keep your eyes on the prize. Focus is essential for you to achieve your current goals. Dedication and sheer force of will can get you there.",
      "outcome": "You will see a positive outcome from your current venture. You can move forward with confidence, as success is close at hand.",
      "situation": "The time is ripe for you to finally attain your goals. Your hard work will pay off and you will see the fruits of your dedication.",
      "obstacle": "Focus is essential right now. If you allow distractions to take your eyes off the goal, you may miss an incredible opportunity.",
      "advice": "Now is not the time for passivity or hesitation. You must take action and move forward decisively and passionately to take hold of your goals.",
      "image": "The Chariot.jpg"
    },
    {
      "card": "Justice",
      "past": "A major decision that you made in the past set the course for your future. Right or wrong, this choice cuts off some possibilities for you.",
      "present": "You\u2019re facing an important decision. The choice that you make now will set your life on a very decisive course, determining the shape of your future.",
      "future": "Something that you\u2019re working on right now will lead to a critical decision. The choice that you make will have a lasting impact on your future.",
      "context": "You\u2019re feeling compelled to reexamine a situation from the past. Perhaps there is a wrong that you need to right or a missed opportunity to revive.",
      "focus": "It\u2019s important to focus on balance and honor right now. Are you acting in a way that\u2019s fair both to yourself and those around you?",
      "outcome": "If you\u2019ve been wronged, rest assured that justice will prevail before it\u2019s all over. Likewise, you should make sure you\u2019re acting fairly toward others.",
      "situation": "Your current situation is bringing justice to those that deserve it. If you\u2019re acting righteously, you will be rewarded, but devious actions will be punished.",
      "obstacle": "Justice can work for or against you depending on your motives. Make sure your pursuits are righteous and respectable or you may pay the price.",
      "advice": "Look for ways that you can deliver justice and fair treatment to those around you. This positive energy will come back to you.",
      "image": "Justice.jpg"
    },
    {
      "card": "The Hermit",
      "past": "In your past, The Hermit represents a time of solitary study or spiritual pursuit. Your dedication to self-growth will serve you well in years to come.",
      "present": "You\u2019re currently being called to a time of self-reflection. Step back from the bustle of your social life and make time for soul searching.",
      "future": "The future promises a rewarding period of solitary soul searching. If you\u2019re in a difficult relationship, this signals freedom from those binds.",
      "context": "It\u2019s important to view your current situation through the lens of opportunity and hope. You are likely facing a time of deep spiritual growth.",
      "focus": "Focus on yourself right now. You may need to step back from relationships for some soul searching, but the worthy ones will wait for you.",
      "outcome": "Step back from the world at large and make time to pursue the higher truths. You will find a wealth of wisdom awaiting you.",
      "situation": "You\u2019re feeling a strong pull to step away from social situations and focus on yourself. Follow this lead and allow yourself a deep spiritual journey.",
      "obstacle": "Friends or family members may not understand your need for solitude right now. Their pressing demands on your time could hinder your spiritual growth.",
      "advice": "Clear time and space for personal growth right now. Give yourself plenty of quiet and solitude to hear all that the universe is imparting to you.",
      "image": "The Hermit.jpg"
    },
    {
      "card": "The Wheel of Fortune",
      "past": "A major past event set forth a chain of reactions that charted the formative years of your life. This event shaped your view of the world.",
      "present": "Beautiful things are manifesting as the universe aligns her wheel of fortune in your favor. Everything is lining up perfectly to help you reach your goals.",
      "future": "You\u2019re close to reaching your goal, but there\u2019s one last obstacle to overcome. Speak with a psychic for a deeper understanding of this challenge.",
      "context": "You\u2019re getting ready to start a fresh chapter in your life. The wheel of fortune has completed one cycle and is ready to begin anew.",
      "focus": "Focus on understanding your role in the universe. The pursuit of self-discovery will give you rich insights into how the wheel of fortune moves you.",
      "outcome": "The Wheel of Fortune portends a positive outcome. Your spirit guides are aligning their energy with your own to help you manifest your desires.",
      "situation": "The Wheel of Fortune is completing one cycle in your life and beginning another. You\u2019re poised at the start of a fresh chapter.",
      "obstacle": "Fear is your worst enemy right now. Though the Wheel of Fortune is turning, you have nothing to fear from these changes. Trust the universe.",
      "advice": "The time is ripe for self-discovery. Take some time to meditate on your place in the universe or to consult a psychic for a deeper understanding.",
      "image": "The Wheel of Fortune.jpg"
    },
    {
      "card": "Strength",
      "past": "Your patience and composure through past challenges helped you build the emotional muscles you\u2019ll need to handle the difficulties to come. You\u2019ve already established your strength.",
      "present": "You have the fortitude that you\u2019ll need to overcome your current challenges. You\u2019ll handle this situation through strong leadership and not through domination.",
      "future": "The difficulties that you\u2019re facing in the present will soon come under your control. You have the strength to master these challenges and emerge victorious.",
      "context": "Your current situation will require stamina and fortitude. Be prepared for a rigorous uphill climb. You will need sustained strength for the challenges ahead.",
      "focus": "Keep your focus on the goal as you trudge persistently ahead. You need to maintain your composure and settle in for the long haul.",
      "outcome": "The outcome is favorable for this situation, but you may not reach the summit as quickly as you\u2019d like. This is a marathon, not a sprint.",
      "situation": "The task ahead may seem daunting, but it\u2019s nothing that you can\u2019t overcome. Keep your eyes on the prize and work diligently for your dreams.",
      "obstacle": "Self-doubt can create weaknesses where there are none. You have the strength to overcome this challenge. You only have to believe in yourself.",
      "advice": "Manifest your strength through persistence, integrity, and courtesy toward others. Don\u2019t turn to dominance and brute force, or you may find yourself alone on the summit.",
      "image": "Strength.jpg"
    },
    {
      "card": "The Hanged Man",
      "past": "Your willingness to surrender to the universe brought you to your current situation. You did not strive for the present outcome, but let the river carry you.",
      "present": "Someone in your life is spoiling for a fight right now, but the best answer is to let it go and avoid the confrontation entirely.",
      "future": "A battle is coming, but you\u2019ll do best to stay on the sidelines. Though you can see the conflict happening, it doesn\u2019t involve you directly.",
      "context": "You may want to take action right now, but there\u2019s little that you can do. You need to simply sit back and let things be.",
      "focus": "Focus on the value of stillness. Right now, this isn\u2019t stagnation but rather rest. Learn how to let things be when you can\u2019t control them.",
      "outcome": "The outcome is positive, but it requires patience. You must find a place of peaceful acceptance before you can move on from this situation.",
      "situation": "There\u2019s very little that you can do in your current situation. You must conquer feelings of boredom or frustration and practice peaceful acceptance.",
      "obstacle": "Struggling to move forward will only make things worse right now. The harder you strain, the tighter the universe will hold on. Learn to relax.",
      "advice": "Mindfulness and meditation are great tools for dealing with the Hanged Man. Right now, mastering the art of acceptance is all you can do.",
      "image": "The Hanged Man.jpg"
    },
    {
      "card": "Death",
      "past": "You\u2019ve experienced the death of something, such as your childhood, your first job, or an early relationship. This loss was the beginning of the phase you\u2019re in now.",
      "present": "You\u2019re dealing with a major transition in life, and you must let go of the old to make room for the new. Release what doesn\u2019t serve you.",
      "future": "You will experience a loss in the future, but this isn\u2019t necessarily a human death. It could be the loss of a job or the end of a relationship.",
      "context": "You\u2019re transitioning from one phase in life to the next. You must accept the death of some things as you embark on new ventures.",
      "focus": "Focus on letting go of anything that doesn\u2019t serve you. This is the time to pare down your belongings and quit the things you don\u2019t enjoy.",
      "outcome": "The outcome of death in this context is positive as it makes room for new things to grow. New beginnings emerge when old things end.",
      "situation": "Your current situation is one of upheaval, but all that you\u2019re losing will clear the way for fresh growth in the next phase of your life.",
      "obstacle": "Trying to resist change will only make things more difficult for you right now. Death is inevitable. It\u2019s important to let things go with grace.",
      "advice": "Focus on the feeling of freedom and lightness that you can enjoy as you let go and move on from things that aren\u2019t serving you.",
      "image": "Death.jpg"
    },
    {
      "card": "Temperance",
      "past": "In the past, you experienced a period of deep calm and restorative peace. Recalling this source of tranquility may help in the future.",
      "present": "Though you\u2019ve been dealing with a dispute, you\u2019re coming to a place of peace. Compromise is the best path forward in the current situation.",
      "future": "Though your current struggles may feel overwhelming, know that you will arrive at a place of peace. These trials have a pleasant outcome.",
      "context": "You should avoid extremes when evaluating the current situation. Things are not black and white and you don\u2019t have to react immediately.",
      "focus": "Focus on creating a sense of peace and calm around you. Withhold judgment and learn to simply be as you assess things at a leisurely pace.",
      "outcome": "The outcome for this situation is generally positive, but it will steer clear of extremes. It\u2019s best to enjoy all things in moderation, even success.",
      "situation": "You\u2019re faced with a complicated situation that requires great patience and consideration. You may feel the temptation to act quickly, but you should refrain.",
      "obstacle": "Extreme emotions are not your friend right now. Even excitement and passion should be tempered so you can do all things with a clear mind.",
      "advice": "Practice patience. This is a learned skill that you can improve like any other. Work on your mindfulness and don\u2019t worry about the past or future.",
      "image": "Temperance.jpg"
    },
    {
      "card": "The Devil",
      "past": "You have broken the chains that bound you to a domineering person or addictive situation. You\u2019ve freed yourself of those things that sought to rule you.",
      "present": "You\u2019re addicted to something that isn\u2019t serving your highest good. This could be anything from illegal substances to social media to your partner\u2019s approval.",
      "future": "You\u2019re not being completely honest with yourself and some of your activities are attracting an unsavory crowd. Carefully consider the consequences of this path.",
      "context": "You\u2019re viewing the current situation through a very earthly lens with an eye to material gain and temporary pleasure and not to higher pursuits.",
      "focus": "Your current focus is on material things, but this approach won\u2019t serve your highest good. You need to elevate your thinking to manifest your destiny.",
      "outcome": "The outcome of this situation is not favorable unless you choose to change your ways. You\u2019re currently too focused on material things and earthly pleasures.",
      "situation": "You may feel like you\u2019re in control, but something else is steering your life right now. This might be an addiction, unhealthy relationship, or other bond.",
      "obstacle": "Earthly pleasures are the greatest obstacle to your greater good right now. You\u2019re too focused on material gains and things that only make you feel good temporarily.",
      "advice": "Carefully consider the ruling forces in your life. Are you truly making your own decisions or are you driven by an addition to pleasure, acceptance, or money?",
      "image": "The Devil.jpg"
    },
    {
      "card": "The Tower",
      "past": "Something that\u2019s been simmering in the past is about to come to a boil and cause a massive explosion. You can\u2019t ignore the issue anymore.",
      "present": "You are experiencing complete chaos in some area of your life. This event will remain relatively contained, though, and won\u2019t destroy other areas of your life.",
      "future": "There is coming chaos, but this is no surprise to you. You\u2019ve seen things building in a dangerous direction for some time.",
      "context": "You\u2019re dealing with a dramatic upheaval right now and things look disastrous. Though some destruction is imminent, this will make room for a fresh start.",
      "focus": "You must face the truth of your current situation. Focus on uncovering all the details, no matter how sordid, so you can prevent future disasters.",
      "outcome": "The outcome of your current situation will be a complete destruction of what currently stands. However, this will make room to build something new.",
      "situation": "Your current situation seems dire. Things are falling apart in seemingly irreparable ways. Once you\u2019ve mourned the loss, however, you can create something new.",
      "obstacle": "Your own sense of denial is your greatest obstacle. You must accept the current destruction and chaos in order to move forward and start anew.",
      "advice": "You must face the truth of this situation and address the causes of the current disaster. Once you\u2019ve done so, you will be able to move on.",
      "image": "The Tower.jpg"
    },
    {
      "card": "The Star",
      "past": "The Star\u2019s inspirational energy led you to a fortuitous choice in the past. You\u2019re still benefiting from the series of events that this put into motion.",
      "present": "You have exciting new ideas about where you want your life to take you. With the blessing of The Star in your corner, you\u2019re likely to get there.",
      "future": "Though times may be tough right now, The Star promises a brighter future ahead. You will find all that you\u2019re seeking and more.",
      "context": "It\u2019s important to look at your situation through a lens of optimism. Even if a good outcome seems unlikely, The Star promises wonderful things are ahead.",
      "focus": "Focus on opening your heart to new possibilities and keeping the flame of hope alive. All is not lost. In fact, wonderful blessings are in store!",
      "outcome": "The outcome for this situation is extremely positive. You will be able to manifest your desires beautifully through your beliefs and thoughts.",
      "situation": "Though you may have gone through a challenging situation recently, you\u2019re emerging on the other side and can now see that all things are possible.",
      "obstacle": "A negative attitude is the biggest obstacle you can face under The Star. You\u2019ll manifest what you focus on, so you must keep your focus positive.",
      "advice": "Speak with a psychic to gain more clarity on the best direction for your life, then focus on manifesting this beautiful destiny for yourself.",
      "image": "The Star.jpg"
    },
    {
      "card": "The Moon",
      "past": "Your current situation is the result of some deception in your past. This may have been deception from another or a deception that you carried out yourself.",
      "present": "You\u2019re getting a lot of mixed signals and it\u2019s difficult to get to the truth of the matter. You can\u2019t trust everything that you\u2019re being told.",
      "future": "You may find that someone is poised to deceive you in the future. Be weary of get-rich-quick schemes and offers that seem too good to be true.",
      "context": "Make sure to look at your current situation with a critical eye. Something is not quite what it seems, so it\u2019s wise to double-check your facts.",
      "focus": "Focus on uncovering the truth of your current situation. If the facts seem confusing, this is probably because someone is misleading you and misrepresenting themselves.",
      "outcome": "The outcome of this situation won\u2019t be what you expected. Though you may face disappointment initially, understand that it\u2019s always better to know the truth.",
      "situation": "You\u2019re in a confusing situation where someone is either intentionally deceiving you or perhaps unintentionally misrepresenting a situation. Be careful who you trust.",
      "obstacle": "You don\u2019t have all the facts right now, and this hinders you from making the choice. It\u2019s important to get to the bottom of the matter.",
      "advice": "Something is amiss and you need to find out what. Speaking with a psychic may help you uncover the deception so you can move forward with confidence.",
      "image": "The Moon.jpg"
    },
    {
      "card": "The Sun",
      "past": "Your life has been secure and nurturing with an abundance of blessings. This has given you a strong foundation and optimistic viewpoint that serves you well.",
      "present": "All things are working in your favor right now. You are at the center of attention, so make sure you use your blessings wisely.",
      "future": "The future is bright, filled with blessings and the manifestation of your desires. You will experience a wonderful period of spiritual growth culminating in great enlightenment.",
      "context": "View this situation through the lens of optimism. The Sun shines a light of truth and blessings so you can manifest exactly what you\u2019re after.",
      "focus": "Focus on looking at the bright side of things. Even if the situation seems dark, The Sun can light your way toward a positive outcome.",
      "outcome": "The outcome for this situation is extremely favorable. The Sun shines down upon you with great blessings. Bright, sunny days are ahead.",
      "situation": "The Sun is finally breaking through the clouds after a period of hardship. You can now relax and enjoy a time of peace, prosperity, and blessings.",
      "obstacle": "The Sun shines a light of truth on everything. If you\u2019re trying to deceive anyone, this card may indicate that you\u2019re going to get caught.",
      "advice": "Practice optimism, no matter how difficult the situation. The Sun can shine its rays of hope and light in even the darkest place if you let it.",
      "image": "The Sun.jpg"
    },
    {
      "card": "Judgement",
      "past": "You had to take a side in the past, and this decision is having a major impact on where you find yourself today.",
      "present": "You\u2019re experiencing great internal conflict about an upcoming decision. You need to reflect on your beliefs and values carefully before moving forward.",
      "future": "A moment of great clarity is coming where you will finally see through the confusion that\u2019s been surrounding you. You will soon know how to proceed.",
      "context": "Consider how your actions have created the situation you\u2019re in. Honest introspection is crucial to see things clearly and find the right path forward.",
      "focus": "Examine your personal values and beliefs. Are your current actions in line with these, or have you strayed from what you know to be right?",
      "outcome": "You may have to pay for a poor choice you made. There\u2019s no use fretting over what\u2019s done. Repair what you can and move on.",
      "situation": "Your current situation requires deep introspection and an assessment of your values and beliefs. It\u2019s important to know exactly where you stand.",
      "obstacle": "If you\u2019ve been deceiving yourself, it\u2019s time for a reckoning. Any dishonesty on your part will stand in the way of your forward movement.",
      "advice": "Make time to truly consider your beliefs and value system and how this defines who you are. If you\u2019re feeling lost, consulting a psychic may help.",
      "image": "Judgement.jpg"
    },
    {
      "card": "The World",
      "past": "You accomplished something great earlier in your life that remains a point of pride. Others may even praise you for this feat.",
      "present": "Your dreams are manifesting at an astonishing rate. It seems too good to be true, but rest assured, this is truly coming to pass.",
      "future": "Don\u2019t give up on your dreams, however unlikely they may seem. The World promises that all things are possible. There are wonderful accomplishments in store.",
      "context": "Take a moment to reflect on all you\u2019ve accomplished as you evaluate your current situation. You will see that you truly deserve the abundance before you.",
      "focus": "You\u2019re enjoying great success right now. Focus on how this can help you bring your inner and outer world into alignment, creating a moment of rich enlightenment.",
      "outcome": "The outcome for this situation couldn\u2019t be better. The World promises an abundance of gifts and successes. You will reap the fruits of your labor",
      "situation": "Your current situation is a beautiful manifestation of the work you\u2019ve done. The seeds you planted are all coming up roses and it\u2019s delightful to see.",
      "obstacle": "Disbelief is the only obstacle that might stand in your path now. Rest assured that this success is real, and you are truly deserving of it.",
      "advice": "Keep doing what you\u2019re doing. The World affirms that you\u2019re going in the right direction and all your dreams will manifest themselves soon.",
      "image": "The World.jpg"
    }
]

const spreadData = {
    'past-present-future': 'This spread can help you recall significant moments from the past, connect these to your current situation, and see where you’re headed so you can course correct if needed and find the best way to glow up.',

    'context-focus-outcome': "If you're struggling to understand your current situation, this tarot spread can untangle things for you. These cards show you what lens to look through, the most important thing to focus on, and where your path will likely lead.",

    'situation-obstacle-advice': "Are you unclear on what's driving you right now? This tarot spread will help you identify the most important situation at present. It will then illuminate the obstacles in your path forward and provide advice on how you can best overcome them."
}

let visibleSection = 1;

function scrollToHeader() {
    let header = document.querySelector('.tarot--header');
    header.scrollIntoView({behavior: 'smooth'});
}

function showHideSections(visibleSectionNum) {
    /*
        This function show or hide the sections.
        visibleSectionNum: The section you want to show.
    */
    const sections = document.querySelectorAll('.tarot--section');
    for (let section of sections) {
        if (section.dataset.section == visibleSectionNum) {
            section.dataset.isvisible = true;
        } else {
            section.dataset.isvisible = false;
        }
    }
}

function squeezeSection(section) {
    /*
        This function squeeze the section.
        section: The section you want to squeeze.
    */
    section.style.height = '0px';
    section.style.minHeight = '0px';
}

/* spread choice selection */
let selectedSpread;
function selectChoice(choiceElement) {
    /*
        This function select the choice element.
        choiceElement: The choice element you want to select.
    */
    const selectedChoices = document.querySelectorAll('button[data-choosen="true"]');
    for (let selectedChoice of selectedChoices) {
        selectedChoice.dataset.choosen = false;
    }
    choiceElement.dataset.choosen = true;
}

function spreadDescription(spread) {
    const description = document.querySelector('.tarot--spread-description');
    const para = document.createElement('p');
    para.innerHTML = spreadData[spread];
    description.innerHTML = '';
    description.append(para);
}

function disableSubmitButton() {
    const submitButton = document.querySelector('#submit-btn');
    submitButton.disabled = true;
}

function enableSubmitButton() {
    const submitButton = document.querySelector('#submit-btn');
    submitButton.disabled = false;
}

function resetSpread(allChoices) {
    for (let card of allChoices) {
        card.dataset.choosen = "false";
    }
}

function resetDescription() {
    const description = document.querySelector('.tarot--spread-description');
    description.innerHTML = '';
    selectedSpread = undefined;
}

function resetInputField() {
    const inputField = document.querySelector('#user-question');
    inputField.value = '';
}

resetInputField();

const allChoices = document.querySelectorAll('.tarot--spread-choices>.tarot--btn');

if (selectedSpread == undefined) {
    disableSubmitButton();
}

for (let choice of allChoices) {
    choice.addEventListener('click', function () {
        selectChoice(this);
        selectedSpread = this.dataset.spread;
        spreadDescription(selectedSpread);
        enableSubmitButton();
    });
}

async function onClickSubmit() {
    secondSectionLoaded(selectedSpread);
    scrollToHeader();
    setTimeout(() => {
      showHideSections(2);
    }, 1000);
    visibleSection = 2;
}

/* --Second page JS-- */

/* Add deck on the board and shuffle them */

const cardContainerClass = '.tarot--card-pack';
const cardClass = '.tarot--card';

function createCard(cardId) {
    const card = document.createElement('div');
    card.classList.add('tarot--card');
    card.dataset.cardNum = cardId;
    card.dataset.choosen = false;
    return card;
}

function addCard2Board(card) {
    const container = document.querySelector(cardContainerClass);
    container.append(card);
}

function createCards(howMany) {
    /*
        This function create given numbers of cards and add them to the Card Container.
        howMany: How many cards you want to add
    */

    for (let i=0; i<howMany; i++) {
        let card = createCard(i+1)
        addCard2Board(card);
    }
}

function interval(a, b) {
    temp = [];
    for (let i = a; i <= b; i++) {
        temp.push(i);
    }
    return temp;
}

function shuffle(nums) {
    let shuffledNums = []
    let usedIndexes = []
    for (let i=0; i<nums.length; i++) {
        let randomIndex = Math.floor(Math.random() * nums.length);
        while (usedIndexes.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * nums.length);
        }
        shuffledNums.push(nums[randomIndex]);
        usedIndexes.push(randomIndex);
    }
    return shuffledNums;
}

function shuffleCardsNum() {
    /*
        This function shuffle the cards number.
    */

    const cards = document.querySelectorAll(cardClass);
    const cardsNum = interval(1, cards.length);
    const shuffledCardsNum = shuffle(cardsNum);
    
    for (let i=0; i<cards.length; i++) {
        cards[i].dataset.cardNum = shuffledCardsNum[i];
    }
}

function moveUp(cardDataId, howMuch) {
    /*
        This function move the card with given data-id up by given howMuch.
        cardDataId: The data-id of the card you want to move up.
        howMuch: How much you want to move up.
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const card = document.querySelector(`[data-card-num="${cardDataId}"]`);
    const cardsContainerHeight = cardsContainer.offsetHeight;
    const cardHeight = card.offsetHeight;
    const centerY = cardsContainerHeight / 2;

    card.style.top = `calc(${centerY - cardHeight/2}px - ${howMuch})`;
    card.dataset.choosen = true;
}

function numCardsChoosed() {
    const cards = document.querySelectorAll(cardClass);
    let num = 0;
    for (let card of cards) {
        if (card.dataset.choosen == 'true') {
            num += 1;
        }
    }
    return num;
}

async function spreadCards() {
    /*
        This function spread the deck of card on to the board
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const cards = document.querySelectorAll(cardClass);
    const cardContainerWidth = cardsContainer.offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    const increament = (cardContainerWidth-cardWidth)/(cards.length-1);
    
    let initialPos = 0;
    for (let card of cards) {
        card.style.left = `${initialPos}px`;
        initialPos += increament;
    }
}

async function move2center(oneByone=false, delay=0.15, splitHalf=false, reverse=false, moveBothEnds=false, moveNcards = 1) {
    /*
        Move cards to the center of the board.
        Parameters:
            oneByone: move the card to the center in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the center
            reverse: Move the card in reverse order
            moveBothEnds: Move cards from both the ends towards the center. Note: Reverse will not work if it is true.
    */

    const cardsContainer = document.querySelector(cardContainerClass);
    const centerX = cardsContainer.offsetWidth / 2;
    const cards = document.querySelectorAll(cardClass);

    let maxRange = cards.length;
    if (moveBothEnds) {
        maxRange = Math.ceil(cards.length/2);
    }

    let count = 0;
    let zIndex = 0;
    for (let i=0; i<maxRange; i++) {
      let j = i;
      while (j < (count+1)*moveNcards) {
          let card = reverse && !moveBothEnds ? cards[cards.length - j - 1] : cards[j];
          card.style.left = `${centerX - card.offsetWidth/2}px`;
          card.style.zIndex = zIndex++;

          if (moveBothEnds) {
              cards[cards.length - j - 1].style.left = `${centerX - cards[cards.length-j-1].offsetWidth/2}px`;
              cards[cards.length - j - 1].style.zIndex = zIndex++;
          }
          j++;
      }
      i = j-1;

      if (oneByone) {
          await sleep(delay);
      }

      count++;
      if (splitHalf && count >= cards.length/2) {
          break;
      }
    }
}

async function move2leftMost(oneByone=false, delay=0.15, splitHalf=false, reverse=false) {
    /*
        Move cards to the left most of the board.
        Parameters:
            oneByone: move the card to the left most in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the left most
            reverse: Move the card in reverse order
    */
    const cards = document.querySelectorAll(cardClass);

    let count = 0;
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        if (reverse) {
            card = cards[cards.length-i-1];
        }

        count++;
        card.style.left = `${0}px`;
        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

async function move2left(howMuch, oneByone=false, delay=0.15, splitHalf=false, reverse=false) {
    /*
        Move cards to the left of the board.
        Parameters:
            howMuch: How much you want to move the card to the left from the center. This should be a string with amount and unit (example: '20%' or '20px' or '20rem').
            oneByone: move the card to the left in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the left
            reverse: Move the card in reverse order
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const centerX = cardsContainer.offsetWidth / 2;

    const cards = document.querySelectorAll(cardClass);

    let count = 0;
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        if (reverse) {
            card = cards[cards.length-i-1];
        }

        count++;
        card.style.left = `calc(${centerX - card.offsetWidth/2}px - ${howMuch})`;
        
        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

async function move2rightMost(oneByone=false, delay=0.15, splitHalf=false, reverse=false) {
    /*
        Move cards to the right most of the board.
        Parameters:
            oneByone: move the card to the right most in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the right most
            reverse: Move the card in reverse order
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const cards = document.querySelectorAll(cardClass);

    let count = 0;
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        if (reverse) {
            card = cards[cards.length-i-1];
        }

        count++;
        card.style.left = `${cardsContainer.offsetWidth - card.offsetWidth}px`;
        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

async function move2right(howMuch, oneByone=false, delay=0.15, splitHalf=false, reverse=false) {
    /*
        Move cards to the right of the board.
        Parameters:
            howMuch: How much you want to move the card to the right from the center. This should be a string with amount and unit (example: '20%' or '20px' or '20rem').
            oneByone: move the card to the right in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the right
            reverse: Move the card in reverse order
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const centerX = cardsContainer.offsetWidth / 2;

    const cards = document.querySelectorAll(cardClass);

    let count = 0;
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        if (reverse) {
            card = cards[cards.length-i-1];
        }

        count++;

        card.style.left = `calc(${centerX - card.offsetWidth/2}px + ${howMuch})`;
        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}

function resetPosition() {
    const cards = document.querySelectorAll(cardClass);

    for (let card of cards) {
        const dataId = card.dataset.cardNum;
        const isChoosen = card.dataset.choosen;

        if (isChoosen == "true") {
            moveUp(dataId, '0px');
            card.dataset.choosen = "false";
        }
    }
}

function resetZIndex() {
  const cards = document.querySelectorAll(cardClass);
  for (let card of cards) {
      card.style.zIndex = "0";
  }
}

function disableShuffleBtn() {
    const shuffleBtn = document.querySelector('#shuffle-btn');
    shuffleBtn.disabled = true;
}

function enableShuffleBtn() {
    const shuffleBtn = document.querySelector('#shuffle-btn');
    shuffleBtn.disabled = false;
}

async function shuffleCards() {
    /*
        Shuffle the cards in the deck.
    */
    shuffleCardsNum();
    resetPosition();
    disableShowCardsBtn();
    disableShuffleBtn();

    move2left('20%', oneByone=false, delay=0.15, splitHalf=true, reverse=false);
    move2right('20%', oneByone=false, delay=0.15, splitHalf=true, reverse=true);
    await sleep(0.5);
    await move2center(oneByone=true, delay=0.20, splitHalf=false, reverse=false, moveBothEnds=true, moveNcards=6);
    resetZIndex();
    await sleep(0.5);
    spreadCards();
    enableShuffleBtn();
}

// add cards to the board and spread over the board
let indicator = false
async function setupCards() {
    createCards(78);
    move2center(oneByone=false, delay=0.15, splitHalf=true, reverse=false, moveBothEnds=true);
    resetZIndex();
    disableShuffleBtn();
}
setupCards();

const cardsContainer = document.querySelector(cardContainerClass);
const cards = document.querySelectorAll(cardClass);

// this observer helps in spreading the deck on the board based on board size
const observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
        const {
            width,
            height
        } = entry.contentRect;
        if (indicator) {
            spreadCards();
        }
    });
});

observer.observe(cardsContainer);

function enableShowCardsBtn() {
    const showCardsBtn = document.querySelector('#show-cards-btn');
    showCardsBtn.disabled = false;
}

function disableShowCardsBtn() {
    const showCardsBtn = document.querySelector('#show-cards-btn');
    showCardsBtn.disabled = true;
}

if (numCardsChoosed() == 0) {
    disableShowCardsBtn();
}

// this observer helps in moving the card UP on click
for (let card of cards) {
    card.addEventListener('click', (entry) => {
        const cardId = entry.target.dataset.cardNum;
        const isChoosen = entry.target.dataset.choosen

        if (numCardsChoosed() < 3 && isChoosen == "false") {
            moveUp(cardId, '40px');
        } else if (isChoosen == "true") {
            moveUp(cardId, '0px');
            entry.target.dataset.choosen = false;
        } else {
            console.log('You can only choose 3 cards')
        }

        if (numCardsChoosed() === 3) {
            enableShowCardsBtn();
        } else {
            disableShowCardsBtn();
        }

    });
}

/* --- cards shuffle animation ends --- */

// variables used from other sections:- selectedSpread
let spreadTypes;

function addCardTypes(spreadTypes) {
    /*
        Add card types to the board.
        Parameters:
            selectedSpread: the spread type selected by the user
    */
    const paraSpreadElements = document.querySelectorAll('.tarot--card-type');

    for (let i=0; i<paraSpreadElements.length; i++) {
        const titleCase = spreadTypes[i%3];
        paraSpreadElements[i].innerHTML = titleCase;
    }
}

// function run when the second section is loaded
async function secondSectionLoaded(selectedSpread) {
    /*
        This function is called when the second section is loaded.
        It adds the card types to the board.
    */
    spreadCards();
    indicator = true;
    spreadTypes = selectedSpread.split('-');
    spreadTypes = spreadTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1));
    addCardTypes(spreadTypes);
    enableShuffleBtn();
}

function getSelectedCardsNum() {
    /*
        Get the selected cards number.
    */
    const choosenCards = document.querySelectorAll(cardClass + '[data-choosen="true"]');
    const choosenCardsNum = [];
    for (let card of choosenCards) {
        choosenCardsNum.push(card.dataset.cardNum);
    }
    return choosenCardsNum;
}

let choosenCardsNum = [];

async function onClickShowCard() {
    /*
        This function is called when the user clicks on the show card button.
    */

    choosenCardsNum = getSelectedCardsNum();
    resetPosition();
    addDataToCards(choosenCardsNum, spreadTypes);
    scrollToHeader();
    await sleep(0.5);
    showHideSections(3);
    point2Back();
}

/* Third Section */

function addDataToCards(choosenCardsNum, spreadTypes) {
    /*
        Add data to the cards.
        Parameters:
            choosenCardsNum: the selected cards number
    */
    const resultCards = document.querySelectorAll('.tarot--r-card');
    
    for (let i=0; i<resultCards.length; i++) {
        let cardData = JSON[Math.floor(choosenCardsNum[i])-1];

        const card = resultCards[i];
        card.dataset.cardName = cardData.card;
        card.dataset.cardType = spreadTypes[i].toLowerCase();
        
        const cardText = cardData[spreadTypes[i].toLowerCase()];
        const cardImgUrl = 'infographics/interactive-names/'+cardData['image'].replaceAll(' ', '-');

        const cardFront = card.querySelector('.tarot--r-card--face-front');
        cardFront.style.backgroundImage = 'url('+cardImgUrl+')';

        const cardBack = card.querySelector('.tarot--r-card--face-back');
        cardBack.style.backgroundImage = 'none';
        let textDiv = document.createElement('div');
        textDiv.classList.add('tarot--r-card--text');
        textDiv.innerHTML = cardText;
        cardBack.appendChild(textDiv);
    }

}

function resetCardOrientation(card) {
    /*
        Reset the card orientation.
    */
    const inner = card.querySelector('.tarot--r-card--inner');
    if (inner.classList.contains('is-flipped')) {
        inner.classList.remove('is-flipped');
    }
}

function resetCardsData() {
    /*
        Reset the card data.
    */
    const resultCards = document.querySelectorAll('.tarot--r-card');
    for (let card of resultCards) {
        card.dataset.cardName = '';
        card.dataset.cardType = '';
        const cardFront = card.querySelector('.tarot--r-card--face-front');
        cardFront.style.backgroundImage = '';
        const cardBack = card.querySelector('.tarot--r-card--face-back');
        cardBack.innerHTML = '';
        resetCardOrientation(card);
    }
}


/* --- Card Flipping on click --- */

function flip(card) {
    card.classList.toggle('is-flipped');
}

const resultCards = document.querySelectorAll('.tarot--r-card--inner');

for (let card of resultCards) {
    card.addEventListener('click', function() {
        flip(card);
    });
}

// reset game 
async function resetGame() {
    /*
        Reset the game.
    */
    scrollToHeader();
    await sleep(0.5);
    disableSubmitButton();
    resetSpread(allChoices);
    resetDescription();
    resetInputField();
    resetCardsData();
    showHideSections(1);
    indicator = false;
    selectedSpread = undefined;
    choosenCardsNum = [];
    spreadTypes = undefined;
    
    disableShowCardsBtn();
}

function blink(elementId) {
    const elem = document.querySelector(`#${elementId}`);
    setInterval(() => {
      if (elem.dataset.blink == 'false') {
        elem.dataset.blink = true;
      } else {
        elem.dataset.blink = false;
      }
    }, 800);
}

function cardSlightTilt() {
    let randNum = Math.floor(Math.random() * resultCards.length);
    const card = resultCards[randNum];
    card.animate([
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(30deg)' },
        { transform: 'rotateY(0deg)' }
    ], {
        duration: 1000,
        iterations: 1,
        easing: 'ease-in-out'
    });
}

function isCardClicked() {
    /*
        Check if the card is clicked.
    */
    for (let card of resultCards) {
      if (card.classList.contains('is-flipped')) {
        return true
      }
    }
    return false;
}

async function point2Back() {
  await sleep(3);
  let interval = setInterval(() => {
    if (isCardClicked()) {
      clearInterval(interval);
      for (let card of resultCards) {
        card.dataset.clicked = 'true';
      }
    } else {
      cardSlightTilt();
    }
  }, 2000);
}

blink('tarot--restart');

