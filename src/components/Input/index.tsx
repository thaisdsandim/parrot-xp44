import Input from "../Input";
import "./forms.css"

type FormsProps = {
    children:JSX.Element;
}

export default function Forms(Props: FormsProps){
    return (

<section>
    {Props.children}
</section>
    );
}