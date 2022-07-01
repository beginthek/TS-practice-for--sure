{
/**
 * Intersection Types : &
 */

type Stuent = {
    name: string;
    score: number;
}

type Worker ={
    empolyeeId: number;
    work: () => void;
}

function internWork(person: Stuent & Worker){
    console.log(person.name, person.empolyeeId, person.work());
    
}

internWork({
    name: 'sellie',
    score: 0,
    empolyeeId: 0,
    work: function (): void {
        throw new Error("Function not implemented.");
    }
})





}