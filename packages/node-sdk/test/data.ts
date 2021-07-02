export const testQuiz = {
  ok: true,
  quiz: {
    mcqs: [
      {
        question_id: "c0b8f29e-b02a-11eb-8aeb-42010a8a0003",
        question:
          "Websites that serve generated content usually incorporate what when possible?",
        answers: [
          "local device",
          "stored files",
          "local storage",
          "cloud account",
        ],
        correct: 2,
        context:
          "Websites that serve generated content usually incorporate stored files whenever possible. Technologies such as REST and SOAP, which use HTTP as a basis for general computer-to-computer communication, have extended the application of web servers well beyond their original purpose of serving human-readable pages. In March 1989 Sir Tim Berners-Lee proposed a new project to his employer CERN, with the goal of easing the exchange of information between scientists by using a hypertext system.",
        model: "valhalla",
        option_eval_scores: [
          {
            "local device": "3.152987241744995",
          },
          {
            "cloud account": "3.7279694080352783",
          },
          {
            "local storage": "3.392145872116089",
          },
          {
            "stored files": "3.833566665649414",
          },
        ],
        eval_score: 3.833566665649414,
      },
      {
        question_id: "3550692a-b02b-11eb-8aeb-42010a8a0003",
        question:
          "What percentage of all other web servers are used by less than 3% of the websites?",
        answers: ["10%", "5%", "2%", "3%"],
        correct: 2,
        context:
          "All other web servers are used by less than 5% of the websites. Below are the latest statistics of the market share of all sites of the top web servers on the Internet by NetcraftFebruary 2020 Web Server Survey. All other web servers are used by less than 3% of the websites.",
        model: "valhalla",
        option_eval_scores: [
          {
            "10%": "3.43694806098938",
          },
          {
            "5%": "3.4210312366485596",
          },
          {
            "2%": "3.42331862449646",
          },
          {
            "3%": "-2.7071683406829834",
          },
        ],
        eval_score: 3.4210312366485596,
      },
      {
        question_id: "c9138be2-b02b-11eb-8aeb-42010a8a0003",
        option_eval_scores: [
          {
            "application servers": "3.340974807739258",
          },
          {
            "Web servers": "3.269554853439331",
          },
          {
            "local machines": "3.2160534858703613",
          },
          {
            "virtual hosts": "2.704090118408203",
          },
        ],
        question:
          "What is the term for a computer that is grouped together behind a load balancer",
        answers: [
          "application servers",
          "local machines",
          "Web servers",
          "virtual hosts",
        ],
        correct: 3,
        context:
          "Using many web servers (programs) per computer, each one bound to its own network card and IP address. Using many web servers (computers) that are grouped together behind a load balancer so that they act or are seen as one big web server. Adding more hardware resources (i.e. RAM, disks) to each computer.",
        model: "trained",
        eval_score: 3.269554853439331,
      },
      {
        question_id: "52a355b4-b02b-11eb-8aeb-42010a8a0003",
        question: "What are the most used web servers on the World Wide Web?",
        answers: [
          "Apache, IIS and Nginx",
          "Nginx, IIS and Nginx",
          "Comanche, IIS and Nginx",
          "Tomcat, IIS and Nginx",
        ],
        correct: 1,
        context:
          "Apache, IIS and Nginx are the most used web servers on the World Wide Web. Server (computing)Application serverComparison of web server softwareHTTP compressionOpen source web applicationVariant objectVirtual hostingWeb hosting serviceWeb containerWeb proxyWeb serviceStandard Web Server Gateway Interfaces used for dynamic contents:CGISCGIFastCGIA few other Web Server Interfaces (server or language specific) used for dynamic contents:SSI (rarely used, static HTML documents containing SSI directives are interpreted by server software to include small dynamic data on the fly when pages are served, e.g. date and time, other static file contents, etc.)SAPI, ISAPI, NSAPIPSGI Perl Web Server Gateway InterfaceWSGI Python Web Server Gateway InterfaceRack Rack Web Server Gateway InterfaceJSGI JavaScript Web Server Gateway InterfaceJava Servlet, JavaServer PagesActive Server Pages, ASP.NETMozilla: what is a web server?Netcraft: news about web server survey",
        model: "valhalla",
        option_eval_scores: [
          {
            "Apache, IIS and Nginx": "3.2223055362701416",
          },
          {
            "Nginx, IIS and Nginx": "3.136507272720337",
          },
          {
            "Comanche, IIS and Nginx": "2.4058218002319336",
          },
          {
            "Tomcat, IIS and Nginx": "3.440366744995117",
          },
        ],
        eval_score: 3.2223055362701416,
      },
    ],
    name: "Web Server.",
    category: "movies",
    source: "Web Server.",
  },
};
