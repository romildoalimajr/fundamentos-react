const TemplateExpressions = () => {

    const name = "Romildo";
    const data = {
        age: 28,
        job: 'Programador',
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>você atua como: {data.job}</p>
            <p>{4 + 4 * 4 / 4 -4}</p>
        </div>
    );

}

export default TemplateExpressions;