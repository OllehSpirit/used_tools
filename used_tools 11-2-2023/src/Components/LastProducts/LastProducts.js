import classes from './LastProducts.module.css'

function LastProducts(){
    return(
        <div>
            <div className={classes.gallery}>
                  <img alt='1' src="Images/01-should-I-donate-or-sell-used-items.png" id="1"/>
                  <img alt='2' src="Images/01-should-I-donate-or-sell-used-items.png" id="2"/>
                  <img alt='3' src="Images/01-should-I-donate-or-sell-used-items.png" id="3"/>
            </div>
        </div>
    );
}
export default LastProducts;