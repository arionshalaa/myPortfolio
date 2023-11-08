export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly CSHARP = new Tag('C#', 'brown');
    static readonly HTML = new Tag('HTML', 'orange');
    static readonly NODEJS = new Tag('NodeJs', 'green');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript','yellow');
    static readonly REACT = new Tag('ReactJs', 'lightblue');
    static readonly CSS = new Tag('CSS', 'blue');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}