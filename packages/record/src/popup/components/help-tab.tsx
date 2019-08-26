/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/



import  * as React from 'react';
import PropTypes from 'prop-types';


interface IHelpTabP{
  [name:string]:any;
}

interface IHelpTabS{
  [name:string]:any;
}

export default class HelpTab extends React.Component<IHelpTabP,IHelpTabS> {
  static defaultProps = {

  };
 
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div></div>
    );
  }
}

 