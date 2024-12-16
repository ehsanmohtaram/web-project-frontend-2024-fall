function D_question_management() {
    return (
        <article class="questions">
        <h1>Questions</h1>
        <section class="question">
            <h4>How many letters are there in "hello"?</h4>
            <section>
                {/* <input id="q_1_1" name="question_1" type="radio"> */}
                <label for="q_1_1">2</label>
            </section>
            <section>
                {/* <input id="q_1_2" name="question_1" type="radio"> */}
                <label for="q_1_2">3</label>
            </section>
            <section>
                {/* <input id="q_1_3" name="question_1" type="radio"> */}
                <label for="q_1_3">4</label>
            </section>
            <section>
                {/* <input id="q_1_4" name="question_1" type="radio"> */}
                <label for="q_1_4">5</label>
            </section>
            <button class="submit">Submit Answer</button>
        </section>
        <section class="question">
            <h4>Where is the capital of Iran?</h4>
            <section>
                {/* <input id="q_2_1" name="question_2" type="radio"> */}
                <label for="q_2_1">Tehran</label>
            </section>
            <section>
                {/* <input id="q_2_2" name="question_2" type="radio"> */}
                <label for="q_2_2">Mashhad</label>
            </section>
            <section>
                {/* <input id="q_2_3" name="question_2" type="radio"> */}
                <label for="q_2_3">Esfehan</label>
            </section>
            <section>
                {/* <input id="q_2_4" name="question_2" type="radio"> */}
                <label for="q_2_4">Yazd</label>
            </section>
            <button class="submit">Submit Answer</button>
        </section>
    </article>
    );
  }
  
  export default D_question_management;