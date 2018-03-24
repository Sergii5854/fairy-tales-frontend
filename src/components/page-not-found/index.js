import React from 'react';
import './styles.styl';

const PageNotFoundComponent = () => {


    return(
     
          <div className="oopss">
              <div className="error-text">
                  <span>404</span>
                  <p>PAGE NOT FOUND</p>
                  <p className="hmpg">
                      <a href='/' className="back">Back To Home</a>
                  </p>
              </div>
          </div>
    
    )
}

export default PageNotFoundComponent;