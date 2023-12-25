/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title: string;
}

class Component {
  constructor(public props: ComponentProps) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
