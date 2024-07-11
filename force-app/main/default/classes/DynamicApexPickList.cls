public without sharing class DynamicApexPickList {
    public static List<String> getPickList(){
        List<String> Options = new List<String>();
        
        Schema.DescribeFieldResult dfr = Account.Type.getDescribe();
        
        for(PickListEntry e : dfr.getPicklistValues()){
            Options.add(e.getLabel());
        }
        System.debug(Options);
        return Options;
        
    }

}