<h1>Admin Emailer</h1>


<form class="form">
	<div class="row">
		<div class="col-sm-4 col-xs-12">
			<div class="form-group">
				<label>Send Email to forum users</label>
				<input id="imgurClientID" type="text" class="form-control" placeholder="Enter Imgur Client ID" value="{imgurClientID}">
				<label>Forum Terms of Use <small>(Leave blank to disable)</small></label>
				<textarea class="form-control" value="adminMailText"></textarea>
			</div>
		</div>
	</div>
</form>

<button class="btn btn-primary" id="save">Save</button>

<script type="text/javascript">


	$('#send').on('click', function() {

		$.post('/api/admin/plugins/imgur/save', {_csrf : $('#csrf_token').val(), imgurClientID : $('#adminMailText').val()}, function(data) {
			app.alertSuccess(data.message);
		});

		return false;
	});

</script>
