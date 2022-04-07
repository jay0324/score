## Score Jquery Plugin


### How to Use

Just use files in dist folder as below:

```markdown
<html>
<head>
.
.
.
<link rel="stylesheet" href="{your_local_path}/jquery-score.min.css">
</head>
<body>
.
<!--setup dom-->
<div class="score" data-id="#myInputId"></div>
<input id="myInputId" type="hidden" name="field_name" />
.
<script src="{jquery}" />
<script src="{your_local_path}/jquery-score.min.js" />
<script>
$(".score").score();
</script>
</body>
</html>
```

### options

Global setup

```markdown
$(".score").score({
    icon: '<svg ...></svg>',    //custom icon, use svg format
    max: 6,                     //max score
    min: 1                      //min score
});
```

Individual setup
```markdown
<div class="score" 
data-id="#myInputId"
data-max="6" 
data-min="1"
></div>
```
