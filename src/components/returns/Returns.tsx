import classes from './returns.module.css'

const Returns = () => {
    return (
        <div className={classes.returns}>
            <h1>Return</h1>
                <form>
                    <label>Please enter your receipt number</label>
                    <input type='text' placeholder='#' />
                    <button>Submit</button>
                </form>
        </div>
    );
};

export default Returns;