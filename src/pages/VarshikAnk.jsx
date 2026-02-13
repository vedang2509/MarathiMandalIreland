const magazines = [
  {
    year: "2024",
    title: "आभा २०२४",
    description:
      "Marathi Mandal Ireland चा वार्षिक अंक – लेख, कविता, अनुभव आणि समुदायाच्या आठवणींचा संग्रह.",
    link: "#", // later replace with actual PDF link
  },
  {
    year: "2023",
    title: "आभा २०२३",
    description:
      "आयर्लंडमधील मराठी समुदायाचे अनुभव, संस्कृती आणि सर्जनशील लेखन यांचा सुंदर संगम.",
    link: "#",
  },
];

export default function VarshikAnk() {
  return (
    <section className="varshik-page">
      <h1>वार्षिक अंक</h1>

      <p className="varshik-intro">
        <strong>Marathi Mandal Ireland</strong> दरवर्षी प्रकाशित करत असलेला
        <strong> वार्षिक अंक</strong> हा आमच्या समुदायातील लेखक, कवी,
        कलाकार आणि सदस्यांच्या विचारांचा व अनुभवांचा आरसा आहे.
      </p>

      <p>
        या अंकामध्ये मराठी भाषा, संस्कृती, परंपरा, वैयक्तिक अनुभव, कथा,
        कविता आणि समाजाशी निगडीत विषयांचा समावेश असतो.
      </p>

      <h2>उपलब्ध अंक</h2>

      <div className="varshik-grid">
        {magazines.map((mag, index) => (
          <div className="varshik-card" key={index}>
            <h3>{mag.title}</h3>
            <p className="varshik-year">वर्ष: {mag.year}</p>
            <p>{mag.description}</p>
            <a href={mag.link} className="varshik-link">
              वाचा / Download →
            </a>
          </div>
        ))}
      </div>

      <h2>योगदान द्यायचे आहे?</h2>
      <p>
        तुम्हाला लेख, कविता, अनुभव किंवा कलाकृती पाठवायच्या असतील तर
        कृपया आमच्याशी संपर्क साधा. Marathi Mandal Ireland सर्व सर्जनशील
        योगदानाचे स्वागत करते.
      </p>
    </section>
  );
}
