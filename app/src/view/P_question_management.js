function P_question_management() {
    return (
        <>
            <article class="questions">
                <h1>Answered Questions</h1>
                <section class="question">
                    <h4>How many letters are there in "hello"?</h4>
                    <ul>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li class="chosen_answer">5</li>
                    </ul>
                </section>
                <section class="question">
                    <h4>Where is the capital of Iran?</h4>
                    <ul>
                        <li class="chosen_answer">Tehran</li>
                        <li>Mashhad</li>
                        <li>Esfehan</li>
                        <li>Yazd</li>
                    </ul>
                </section>
            </article>
            <button class="add_button">Answer New Question</button>
        </>
    );
  }
  
  export default P_question_management;