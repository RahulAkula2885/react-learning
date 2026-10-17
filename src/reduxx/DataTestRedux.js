import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counter";

function DataTestRedux() {
    const [count, setCount] = useState(0);

    // Read the count from Redux
    const counter = useSelector((state) => state.counter.value);

    let dispatch = useDispatch();

    
    function handleIncrement() {
        //dispatch({ type: "counter/increment" });
        dispatch( increment("") );
    }
    
    function handleDecrement() {
        if (counter <= 0) {
            toast.error("Count cannot be less than 0");
            return;
        }

        dispatch({ type: "counter/decrement" });
    }

    function incrementState() {
        setCount((prev) => prev + 1);
    }

    function decrementState() {
        setCount((prev) => {
            if (prev <= 0) {
                toast.error("Count cannot be less than 0");
                return 0;
            }

            return prev - 1;
        });
    }

    useEffect(() => {
        console.log("Local count changed:", count);
    }, [count]);

    return (
        <div className="container-fluid min-vh-100 d-flex flex-column p-0">

            {/* Header */}
            <header className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="container flex-grow-1 py-3">
                <h1>Redux Test Page</h1>
                <p>This is a test page for Redux functionality.</p>

                <div className="card p-3 mb-3">
                    <h5>Redux Counter</h5>
                    <p>Current Redux Count: {counter}</p>
                    <p className="text-muted">
                        This value comes from the Redux store.
                    </p>

                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-success"
                            onClick={handleIncrement}
                        >
                            Increment +
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={handleDecrement}
                        >
                            Decrement -
                        </button>
                    </div>
                </div>


                <div className="card p-3">
                    <h5>Local React Counter</h5>
                    <p>Current Local Count: {count}</p>
                    <p className="text-muted">
                        This value is managed by useState.
                    </p>

                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-success"
                            onClick={incrementState}
                        >
                            Increment +
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={decrementState}
                        >
                            Decrement -
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer
                className="mt-auto mt-3 mx-2 mb-2 px-3"
                style={{ backgroundColor: "#203E7B" }}
            >
                <Footer />
            </footer>
        </div>
    );
}

export default DataTestRedux;

// import Footer from "../Shared/Footer";
// import Header from "../Shared/Header";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast"; //function
// import { useSelector } from "react-redux";


// function DataTestRedux() {

//     let [count,setCount] = useState(0);

//     let counter = useSelector((state) => state.counter.value);

//     function incrementState() {
//         setCount(count + 1);
//     }

//     function decrementState() {
//         if (count > 0) {
//             setCount(count - 1);
//         }else {
//             toast.error("Count cannot be less than 0");
//         }
//     }

//     useEffect(() => {
//         console.log("Count changed:", count);
//     }, [count]);


//     return (
//         <div className="container-fluid min-vh-100 d-flex flex-column p-0">

//             {/* Header */}
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <Header />
//                     </div>
//                 </div>
//             </div>

//             {/* Main content */}
//             <main className="container flex-grow-1">
//                 <div className="row">
//                     <div className="col-12">
//                         <h1>Redux Test Page</h1>
//                         <p>This is a test page for Redux functionality.</p>
//                         <p>Current Count: {counter}</p>
//                         <p>Current Count: {count}</p>
//                         <div className="d-flex gap-2">
//                             <button className="btn btn-success" onClick={incrementState}>
//                                 Increment
//                             </button>
//                             <button className="btn btn-danger" onClick={decrementState}>
//                                 Decrement
//                             </button>
//                         </div>
//                         </div>
//                         <div className="d-flex gap-2 mt-2">
//                         <button className="btn btn-success" onClick={() => setCount(count + 1)}>
//                             +
//                         </button>
//                         <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
//                             -
//                         </button>
//                     </div>
//                 </div>
//             </main>

//             {/* Footer */}
//             <footer
//                 className="container-fluid mt-auto mb-2 mx-2 px-5"
//                 style={{ backgroundColor: "#203E7B" }}
//             >
//                 <Footer />
//             </footer>

//         </div>
//     );
// }

// export default DataTestRedux;