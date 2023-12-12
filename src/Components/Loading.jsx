export default function Loading() {
    return (
        <div className="loading">
            <div className="loading__container">
                <div className="loading__container__spinner">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        </div>
    );
}