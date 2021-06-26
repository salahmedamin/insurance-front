import css from "cease"

const Page = ({text,active,onClick})=>
<div className={"page" + (active ? " active":"")} onClick={onClick}>{text}</div>

export const StyledPage = css`
  .page{
    width: 40px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content: center;
    font-weight: bold;
    border: 1px solid var(--dark);
    border-radius: 6px;
    margin: 3px;
    cursor: pointer
  }
  .page.active{
    color: white;
    background: black;
  }
`(Page)