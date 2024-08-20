export default function WrapperCardComponent(props: any) {
    return (
        <div className="card w-50 mx-auto mt-5">
            {props.children}
        </div>
    );
}