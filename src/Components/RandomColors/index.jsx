import { useEffect, useState } from "react";

export default function RandomColors() {
    const [typeofColor, settypeofColor] = useState("hex");
    const [color, setcolor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setcolor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setcolor(`rgb(${r},${g},${b})`); // ✅ Fixed: Removed extra space
    }

    useEffect(() => {
        if (typeofColor === "rgb") {
            handleCreateRandomRgbColor(); // ✅ Fixed: Now calling the function
        } else {
            handleCreateRandomHexColor(); // ✅ Fixed: Now calling the function
        }
    }, [typeofColor]);

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    background: color,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                }}
            >
                <button onClick={() => settypeofColor("hex")}>Create HEX Colors</button>
                <button onClick={() => settypeofColor("rgb")}>Create RGB Colors</button>
                <button onClick={typeofColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
                    Generate Random Colors
                </button>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        flexDirection: "column",
                        fontSize: "60px",
                        marginTop: "50px",
                        gap: "20px",
                    }}
                >
                    <h3>{typeofColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                    <h1>{color}</h1>
                </div>
            </div>
        </>
    );
}
