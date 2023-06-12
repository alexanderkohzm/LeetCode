/**
 *
 *
 *
 * 8 days = full
 * 7 days = half
 * 6 days = 1/4
 *
 */

/**
 *
 *
 * if someone breaks a window, the alarm will be triggered
 * If the alarm is triggered at nighttime, it will also turn on all the lights in the house
 *
 * Answer 1 may not be true because we don't know what additional features there are
 * We can't prove it otherwise (i.e. it may be day time but there might be additional rules)
 *
 * Answer 2 makes sense, as it fulfils both critiera (alarm triggered, nighttime, lights in bedroom turned on). This is because it's a subset of the two logics
 *
 * Answer 3 - alarms might be triggered in other cases (i.e. not a window)
 *
 * Answer 4 - Alarm triggered AND lights turning on !== window being broken. It could be something else.
 *
 * Thus, only answer 2 is the right one
 *
 */

/**
 *
 * At the company, the average (mean) salary for white-collar workers i HIGHER than for blue-collar workers
 *
 * Answer 1: Some blue-collar workers may receive a higher salary than the highest-paid white-collar workers. YES This is true - if there are 1 million blue collar workers earning 1 cent and 5 blue collar workers earning 1million. Highest paid white collar = 800,000. Then yes
 *
 * Answer 2: Some Blue collar workers receive the lowest salary -> unable to confirm
 *
 * Answer 3: Most white-collar workers receive a higher salary than blue-collar workers -> unable to confirm as we don't know the spread (I.e.)
 *
 * Answer 4: If all blue-collar workers have teh same salary, then the white-collar worker  has the highest salary -> YES, because blue < white
 *
 */

/**
 *
 * question 4:
 *
 * XSS => validate user input and escape HTML String before dispalying
 * responsive => media query in CSS to target particular screen width (YES)
 * a11y => use aria-label for clickable icon buttons (YES)
 * DOM => An event on particular tag element will bubble up to its parent and ancestors (YEP, event click)
 * SCSS => use nested selectors to avoid retypign the same selector path prefix (not sure)
 * REST => Use the PATCH method to modify existing data
 * i18n => All displayed text need to go through a translation function
 *
 *
 *
 */

/**
 *
 *
 * question 5:
 * date picker with input field
 *
 * Calendar popup will be shown when the text input is focused
 *
 * If navigating across date numbers using keyboard shoudl be using arrow keys (up/down/left/right), which of the following ARIA roles will not be used at all in the code (implicity, explicit)
 *
 * textbox => I assume so as there's no text to input
 * dialog => I assume so as there's no dialog box, unless you're picking something and they inform you
 * menu => I assume so as you need to select the JULY or YEAR
 * table => i assume yes because it's the calendar
 * grid => I assume yes because it's the calendar
 * option => I assume yes because you need to select the july or year
 *
 */

/**
 *
 *
 * Question 7:
 *
 * Answer 1: function FilesGenerator({onSubmit}) {}
 *  unlikely to be this as there's nothing wrong with destructuring the props passed in
 *
 * Answer 2: const [files, setFiles] = useState(generateFiles(100))
 *  There's no indication whether generateFiles(100) is an expensive function or not. but apparently it shoudl be a PURE function, i.e. it shouldn't have any inputs (100) and always return the same thing
 *
 * Answer 3: const interval = setInterval(() => {})
 *  I don't think that's the issue -> this is just a setInterval function
 *
 * Answer 4: setCountdown(countdown - 1) ->
 *  I think this is the issue -> we should be using useRef probably
 *
 * Answer 5: }, [countdown])
 *  This is kind of crazy -> your useEffect is getting triggered with every change in countdown
 *
 * Answer 6: SHould be fine, it's just setting the countdown to 1000
 * <button onClick={() => setCountdown(1000)}> Reset </button>
 *
 * Answer 7: <button onClick={() => onSubmit?.()}> Accept </button
 * Should be fine, it's just a submit button
 *
 *
 */
