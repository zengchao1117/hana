var firstname = $.request.parameters.get('firstname');
var conn; 
try { 
conn = $.db.getConnection(); 
var query = 'select \"PERS_NO\",\"FIRSTNAME\",\"LASTNAME\",\"EMAIL\" '
         + ' from \"HANDDEV\".\"hand.com.HelloWorldXS.Data::HANDData.User\" '
         + ' where "FIRSTNAME" = ? '; 
var pstmt = conn.prepareStatement(query); 
pstmt.setString(1, firstname); 
var rs = pstmt.executeQuery(); 
var body;
if (rs.next()) {  
body = JSON.stringify({
    "pers_no": rs.getString(1),"firstname": rs.getString(2),
    "lastname": rs.getString(3),"email": rs.getString(4)
});
}
$.response.contentType = 'application/json'; 
$.response.setBody(body);
$.response.status = $.net.http.OK;
}catch (ex) { 
     $.trace.error("Unable to retrieve data. " + ex.toString()); 
}finally {    
   rs.close(); pstmt.close(); conn.close(); 
}
