/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/

import  * as React from 'react';


interface IResultsTabP{
  [name:string]:any;
}

interface IResultsTabS{
  [name:string]:any;
}

export default class ResultsTab extends React.Component<IResultsTabP,IResultsTabS> {
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

 