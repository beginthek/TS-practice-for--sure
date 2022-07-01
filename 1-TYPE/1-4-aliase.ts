{
    // type alias

    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';

    type Num = number;
    type Student = {
        name: string;
        age: number;
    }
    const student: Student = {
        name: 'ellie',
        age: 12,
    };

    /**
     * string Literal Type
     */
    type Name = 'name';
    let ellieName:Name;
    ellieName ='name';
    type JSON = 'json'

    const json:JSON = 'json'; //아니 이걸 왜쓰는거지? 

    type Boal =true;
    const isCat: Boal =true;

}

