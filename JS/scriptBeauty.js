$(onHtmlLoaded);
var List =[
    {
        id:2,
        name:"Andrea",
        mail:"andi@gmail.com"
    },
    {
        id:4,
        name:"Maria",
        mail:"maria.sds@gmail.com"
    },
    {
        id:5,
        name:"Andrei",
        mail:"andreisds@yahoo.com"
    },
    {
        id:7,
        name:"Geo",
        mail:"geo@yahoo.com"
    },
    {
        id:12,
        name:"Raluca",
        mail:"raluca@gmail.ro"
    },
    {
        id:32,
        name:"Gabriel",
        mail:"gabriel@gmail.com"
    }
    ]
function onHtmlLoaded(){
    $(document).on('click','[data-delete-id]',onClickDelete);
    $(document).on('click','[data-edit-id]',onClickEdit);
    var table=$("#tblList");
    buildTable();
    $("#SearchButton").on("click",onInputChange);
    $("#SortDown").on('click',onSortDown);
    $("#SortUp").on('click',onSortUp);
    function buildTable(){
        var html="";
        for (var i=0;i<List.length;i++){
            var member=List[i];
            html+="<div>"+member.name+"</div>"+
                "<div>"+member.mail+"</div>"+
                '<div> <button data-delete-id= '+member.id+'> Delete </button> <button data-edit-id='+member.id+'>Edit</button> </div>';
            table.html(html);
        }
    }
    function onClickDelete(){
        var id=$(this).data('delete-id');
        var elementDelete=findMember(id);
        if (elementDelete>-1){
            List.splice(elementDelete,1);
            buildTable();
            
        }
    }
    
    function findMember(id){
        var index=-1;
        for (var i=0; List.length;i++){
            if (List[i].id===id){
                index=i;
                return i;
            }
        }
    }
    
    function onInputChange(){
        var input=$("#SearchField");
        var  inputVal=$(input).val().toLocaleLowerCase();
        var index=checkVal(inputVal);
        if (index>-1){
                alert(List[index].mail);
            }else{
                alert("Not found");
            }
    }
  
    
    function checkVal(inputVal){
        var ind=-1;
        for (var i=0;i<List.length;i++){
            var namevalue=List[i].name.toLocaleLowerCase();
            if (inputVal===namevalue){
            ind=i;
            return ind;
            }
        }
    }
    function onClickEdit(){
        var id=$(this).data('edit-id');
        var elementEdit=findMember(id);
        if (elementEdit>-1){
            var newName=prompt("Name: ",List[elementEdit].name);
            var newMail=prompt("Mail: ",List[elementEdit].mail);
            List[elementEdit].name=newName;
            List[elementEdit].mail=newMail;
            buildTable();
    }
    }
    function onSortDown(){
        var val="";
        for (var i=0; i<List.length;i++){
            for (var j=i+1;j<List.length;j++){
                if (List[i].name>List[j].name){
                  val=List[i].name;
                  List[i].name=List[j].name;
                  List[j].name=val;
                }
            }
        }
        buildTable();
    }
    function onSortUp(){
        var val="";
        for (var i=0; i<List.length;i++){
            for (var j=i+1;j<List.length;j++){
                if (List[i].name<List[j].name){
                  val=List[i].name;
                  List[i].name=List[j].name;
                  List[j].name=val;
                }
            }
        }
        buildTable();
    }    
}