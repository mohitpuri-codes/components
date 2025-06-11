import DataTable from "./components/DataTable";
import FileUploader from "./components/FileUploader";
import List from "./components/List";
import OTPValidator from "./components/OTPValidator";

const list = [1, 2, 3, 4, 5];

const ButtonWrapper = (props: React.HTMLAttributes<HTMLButtonElement>) => (
  <button {...props}>Upload a file</button>
);

function App() {
  return (
    <section>
      <div>
        <h1>Render Prop pattern</h1>
        <List
          dataSource={list}
          render={(data) =>
            data.map((dataItem) => {
              return <li>{dataItem}</li>;
            })
          }
        />
      </div>

      <div>
        <h2>Data Table component</h2>
        <DataTable
          columns={["Name", "Age", "City"]}
          data={[
            ["John", "28", "New York"],
            ["Sara", "32", "San Francisco"],
          ]}
          render={(cols, datasource) => {
            return (
              <table style={{ border: "1px solid white" }}>
                {cols.map((colItem) => (
                  <th style={{ border: "1px solid white" }}>
                    <tr>{colItem}</tr>
                  </th>
                ))}
                <tbody>
                  {datasource.map((dataItem) => (
                    <tr style={{ border: "1px solid white" }}>
                      {dataItem.map((trItem) => (
                        <td style={{ border: "1px solid white" }}>{trItem}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }}
        />
      </div>

      <div style={{ margin: "10px" }}>
        <h2>File uploader component</h2>
        <FileUploader
          accept=".jpg"
          maxSize={5 * 1024 * 1024}
          onUpload={() => alert("File uploaded successfully")}
          FileWrapper={ButtonWrapper}
        />
      </div>

      <div>
        <h2>OTP Input</h2>
        <OTPValidator length={4} />
      </div>
    </section>
  );
}

export default App;
{
  /* <DataTable 
  columns={["Name", "Age", "City"]} 
  data={[
    ["John", 28, "New York"],
    ["Sara", 32, "San Francisco"]
  ]} 
/> */
}

{
  /* <FileUploader 
  accept=".jpg,.png" 
  maxSize={5 * 1024 * 1024} 
  onUpload={(files) => console.log(files)} 
/> */
}
