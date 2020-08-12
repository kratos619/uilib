import { BaseElement } from "./BaseElement";

export class DataTable extends BaseElement {
  constructor(data) {
    super();
    this.data = data;
    this.thtags = [];
  }
  headerExtractor() {
    console.log(this.data);
    var set1 = new Set();
    let tableHeader = this.data;
    for (const key in tableHeader) {
      if (tableHeader.hasOwnProperty(key)) {
        let element = tableHeader[key];
        for (const key1 in element) {
          set1.add(key1);
        }
      }
    }
    return set1;
  }

  getTableHeading(){
        let sets = this.headerExtractor();
        let trhead = "";
        sets.forEach(function (values) {
          trhead += `<th class="mdl-data-table__cell--non-numeric"> ${values} </th>\n`;
        });
        return trhead;
  }
  getTableData(){
    let sets = this.headerExtractor();
    let trtags = "";
    for (let row of this.data) {
      trtags += `<tr>`;
      let tdTags = "";
      sets.forEach(function (val) {
        trtags += `<td class="mdl-data-table__cell--non-numeric"> ${row[val]} </td>`;
      });
      trtags += `</tr>`;
    }
    return trtags;
  }

  getElementString() {
    
    return `
    <table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
      <thead>
        <tr>
        ${this.getTableHeading()}
        </tr>
      </thead>
  <tbody>
   ${this.getTableData()}
  </tbody>
</table>
`;
  }
}
