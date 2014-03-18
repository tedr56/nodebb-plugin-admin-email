<h1>Admin Emailer</h1>
<!-- IF emailerInstalled -->
<form class="form">
	<div class="row">
		<div class="col-sm-4 col-xs-12">
			<div class="form-group">
				<label>Send Email to Forum users</label>
				<textarea class="form-control" value="{adminEmailText}"></textarea>
			</div>
		</div>
	</div>
</form>
<button class="btn btn-primary" id="save">Save</button>
<script type="text/javascript">

	$('#send').on('click', function() {

		$.post('/api/admin/plugins/admin-email123/send', {_csrf : $('#csrf_token').val(), adminEmailText : $('#adminEmailText').val()}, function(data) {
			app.alertSuccess(data.message);
		});

		return false;
	});

</script>
<!-- ELSE -->
<form class="form">
    <div class="row">
	<div class="col-sm-4 col-xs-12">
	    <i class="fa fa-times alert-danger"></i>
	    <label>No Emailer Installed!</label>
	</div>
    </div>
</form>
<!-- ENDIF emailerInstalled -->