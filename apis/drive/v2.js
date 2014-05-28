/**
 * <%= title %>
 *
 * <%= description %>
 *
 * @author <%= ownerName %>
 */

function Drive() {
  this.files = {
    upload: function() {
      console.log('upload');
    },

    emptyTrash: function() {
      console.log('emptyTrash');
    }
  };
}

module.exports = Drive;
