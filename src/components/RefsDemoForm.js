import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.commRef = React.createRef();
        this.menRef = React.createRef();
        this.wommenRef = React.createRef();
        // this.hobRef = React.createRef();
        
        this.state = {
            name: '',
            comment: '',
            gender: ''
        }
    }

    // componentDidMount(){
    //     this.inputRef.current.focus();
    // }
    handleGenderChange = (event) => {
        this.setState({
          gender: event.target.value
        });
      };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('name: '+this.inputRef.current.value+ ' comment: '+this.commRef.current.value +' Gender '+this.genRef.current.checked)
      };
  

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                ref={this.inputRef}
                value={this.inputRef.value}
              />
            </div>
            <div>
              <label htmlFor="comment">Comment: </label>
              <textarea
                id="comment"
                ref={this.commRef}
                value={this.commRef.value}
              ></textarea>
            </div>
            <div>
              <label htmlFor="Men">Men</label>
              <input
                type="radio"
                id="Men"
                ref={this.menRef}
                value="Men"
                // checked={this.state.gender === "Men"}
                // onChange={this.handleGenderChange}
            
              />
              <label htmlFor="Women">Women</label>
              <input
                type="radio"
                id="Women"
                ref={this.wommenRef}
                value="Women"
                // checked={this.state.gender === "Women"}
                // onChange={this.handleGenderChange}
               
              />
            </div>
            {/* <div>
              <label htmlFor="swimming">Swimming </label>
              <input
                type="checkbox"
                id="swimming"
                ref={this.hobRef}
                value="Swimming"
                checked={this.state.hobby === "Swimming"}
               
              />
              <label htmlFor="reading">Reading </label>
              <input
                type="checkbox"
                id="reading"
                ref={this.hobRef}
                value="Reading"
                checked={this.state.hobby === "Reading"}
                
              />
            </div>
            <div>
              <label htmlFor="language">Language</label>
              <select
                id="language"
                ref={this.lagRef}
                value={this.state.lang}
                
              >
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
              </select>
            </div> */}
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        )
    }
}

export default RefsDemo