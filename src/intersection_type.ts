type Draggable = {
    drag: () => void
};

type Resizeable = {
    size: () => void
};

type UIWidget = Draggable & Resizeable; // this is intersection usage
// operator sign is &

let textBox: UIWidget = { // If you implement UIWidget, you need to set both of these types of annotations.
    drag: () => {},
    size: () => {}
}