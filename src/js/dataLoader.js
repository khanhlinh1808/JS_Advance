export default dataLoader;
import negativeColor from './negativeColor.js'
const QUERY_DATA_LOADER = 'table tbody';

function dataLoader(dataset) {
    const tableElement = document.querySelector(QUERY_DATA_LOADER)
    var datasetHtml = dataset
        .map(
            ({
                name,
                shares,
                percentage,
                lastUpdate,
                priceRange,
                shareVolume,
                transactionDate,
            }) => {
                return `
                   <tr>
                   <td class="detail-data-container">
                   ${name}   
                   <div class="popup">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Ticker</th>
                                                <th>Quantity</th>
                                                <th>Percentage</th>
                                                <th>Update date</th>
                                                <th>Value</th>
                                              </tr>
                                        </thead>
                                       <tbody>
                                       </tbody>
                                      </table>
                                </div> 
                   </td>
       <td>${shares}</td>
       <td>${percentage}%</td>
       <td>${lastUpdate}</td>
       <td style="color:${negativeColor(shareVolume)}">
       ${shareVolume}
       </td>
       <td>${priceRange.start} - ${priceRange.end}</td>
       <td>${transactionDate}</td>
     </tr>
     `
            },
        )
        .join(' ')
    tableElement.innerHTML = datasetHtml

    return new Promise((resolve) => {
        const nameEle = document.querySelectorAll(".detail-data-container");
        resolve(nameEle);
    });
}