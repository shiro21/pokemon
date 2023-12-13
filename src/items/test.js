import { useEffect, useState } from "react";

const One = (test) => {
    useEffect(() => {
        console.log("One");

        return () => {
            console.log("CleanUp One")
        }
    }, [test])

    return <div>
        One
        <Two test={test} />
    </div>;
}

const Two = (test) => {
    useEffect(() => {
        console.log("Two");

        return () => {
            console.log("CleanUp Two")
        }
    }, [test])
}

const Test = () => {

    const [test, setTest] = useState(0);

    useEffect(() => {
        console.log("Test");

        return () => {
            console.log("CleanUp Test")
        }
    }, [test])
    return (
        <div>
            <button onClick={() => setTest(1)}>클릭</button>
            Test
            <One test={test} />
        </div>
    );
}

export default Test;