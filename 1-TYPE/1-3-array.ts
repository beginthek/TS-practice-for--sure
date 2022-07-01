{
    //Array
    const fruits: string[] = ['☆','★'];
    const scores: Array<number> = [1,3,4]; // 
    function printArray(fruits: readonly string[]){
    }
    //Tuple (서로 다른 타입의 데이터를 담을수있다) -> interface, type alias, class
    let student: [string, number];
    student = ['name' , 123];
    student[0] // name
    student[1] // 123   // 튜플을 사용하는것을 권장하지는 않다  ,cause 인덱스로
    // 접근하는 것은 가독성이떨어진다,, 접근해서 보지 않는 한 확인하는 법이 불편하다
    // tuple 대신  object ,class 를 쓰면 명시해서 접근할수있다.
    const [name, age] = student;
} 