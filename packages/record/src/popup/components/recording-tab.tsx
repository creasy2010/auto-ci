/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/
import  * as React from 'react';


interface IRecordingTabP{
  [name:string]:any;
}

interface IRecordingTabS{
  [name:string]:any;
}

export default class RecordingTab extends React.Component<IRecordingTabP,IRecordingTabS> {
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

 