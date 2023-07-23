import {atom,selector} from "recoil";

// const [course, setCourses] = useState("");
// const [published, setPublished] = useState(false);
// const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");
// const [price, setPrice] = useState("");
// const [imageLink, setImageLink] = useState("");

export const courseAtom = atom({
    key:'course',
    default:null,
});

export const publishedAtom = atom({
    key:'published',
    default:false,
});

export const titleAtom = atom({
    key:'title',
    default:null,
});

export const descriptionAtom = atom({
    key:'description',
    default:null,
});

export const priceAtom = atom({
    key:'price',
    default:null,
});
export const imageLinkAtom = atom({
    key:'image',
    default:null,
});
